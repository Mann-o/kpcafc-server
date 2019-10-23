'use strict'

const Application = use('App/Models/Application')
const Redis = use('Redis')
const validate = require('uuid-validate')

class ValidateAPIKey {
  async handle ({ request, response }, next) {
    try {
      const authorization = request.header('authorization')

      console.log('hitting validate api key')

      if (authorization) {
        const apiKey = authorization
          .replace('Bearer ', '')
          .toLowerCase()

        if (
          (apiKey != null) &&
          apiKey.length &&
          validate(apiKey, 4)
          && (apiKey !== 'bearer')
        ) {
          const redisKey = `KPCAFC:apikey:${apiKey}`
          const cachedApiKey = await Redis.get(redisKey)
          const { rateLimit, revoked } = (cachedApiKey != null)
            ? JSON.parse(cachedApiKey)
            : await this.getExistingApiKey({ apiKey })

          if ((cachedApiKey == null) && (rateLimit != null) && (revoked != null)) {
            await Redis
              .multi()
              .set(redisKey, JSON.stringify({ rateLimit, revoked }))
              .expire(redisKey, 60 * 30)
              .exec()
          }

          if (rateLimit && !revoked) {
            request._data = { apiKey, rateLimit }
            return next()
          }
        }
      }

      return response
        .status(401)
        .json({
          status: 'error',
          error:  'Invalid API key'
        })
    } catch (error) {
      console.log(error)
      return response
        .status(500)
        .json({
          status: 'error',
          error:  'Server error. If this issue persists please contact KPCAFC',
        })
    }
  }

  async getExistingApiKey ({ apiKey = null }) {
    if (apiKey != null) {
      const parsedKey = await Application.query().where({ api_key: apiKey }).first()
      return (parsedKey != null)
        ? parsedKey.toJSON()
        : { rateLimit: null, revoked: null }
    }
    return { rateLimit: null, revoked: null }
  }


}

module.exports = ValidateAPIKey
