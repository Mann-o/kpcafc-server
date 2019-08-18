'use strict'

const _ = require('lodash')

class JsonDeserialiser {
  async handle ({ request }, next) {
    request._data = _.mapKeys(request._data, _.rearg(_.snakeCase, 1))
    return next()
  }
}

module.exports = JsonDeserialiser
