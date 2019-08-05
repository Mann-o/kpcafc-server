'use strict'

const Env = use('Env')

class CheckAppKeyHeader {
  async handle ({ request, response }, next) {
    if (Env.get('NODE_ENV') === 'development') {
      return next()
    }

    const appKeyFromEnv = Env.get('APP_KEY')
    const appKeyFromHeader = request.header('kpcafc-api-key')

    if (appKeyFromEnv == null) {
      return response
        .status(500)
        .json({
          status: 'error',
          error: 'Invalid server configuration',
        })
    }

    if (appKeyFromHeader == null) {
      return response
        .status(401)
        .json({
          status: 'error',
          error: 'KPCAFC-Api-Key header missing from request',
        })
    }

    if (appKeyFromHeader !== appKeyFromEnv) {
      return response
        .status(401)
        .json({
          status: 'error',
          error: 'KPCAFC-Api-Key header invalid',
        })
    }

    return next()
  }
}

module.exports = CheckAppKeyHeader
