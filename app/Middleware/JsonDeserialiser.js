'use strict'

const _ = require('lodash')

class JsonDeserialiser {
  async handle ({ request }, next) {
    request.body = (request._body != null)
      ? _.mapKeys(request._body, _.rearg(_.snakeCase, 1))
      : null
    return next()
  }
}

module.exports = JsonDeserialiser
