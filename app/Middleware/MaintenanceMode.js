'use strict'

const { existsSync } = require('fs')
const { resolve } = require('path')

const Helpers = use('Helpers')

class MaintenanceMode {
  async handle ({ response }, next) {
    if (existsSync(resolve(`${Helpers.appRoot()}/down`))) {
      return response
        .header('Retry-After', '1800')
        .status(503)
        .json({
          status: 'error',
          error: 'api_under_maintenance',
        })
    }

    return next()
  }
}

module.exports = MaintenanceMode
