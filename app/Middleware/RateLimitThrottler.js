'use strict'

const getMinutes = require('date-fns/getMinutes')

const Redis = use('Redis')

class RateLimitThrottler {
  async handle ({ request, response }, next) {
    try {
      const currentMinute = getMinutes(new Date())
      const redisTarget = `kpcafc:throttle:${request._data.apiKey}:${currentMinute}`
      const currentUsage = await Redis.get(redisTarget)

      if (request._data.rateLimit !== 0) {
        if (
          (currentUsage == null) ||
          (currentUsage < request._data.rateLimit)
        ) {
          await Redis
            .multi()
            .incr(redisTarget)
            .expire(redisTarget, 59)
            .exec()
        } else {
          return response
            .status(429)
            .json({
              status: 'error',
              error: 'API usage limit exceeded - please try again later.',
              limit: `${request._data.rateLimit} requests per minute`,
              requestsUsed: currentUsage,
            })
        }
      }

      return next()
    } catch (error) {
      console.log(error)
      return response
        .status(500)
        .json({
          status: 'error',
          error:  'Server error. If this issue persists please contact KPCAFC.',
        })
    }
  }
}

module.exports = RateLimitThrottler
