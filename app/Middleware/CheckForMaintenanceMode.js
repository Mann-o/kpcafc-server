'use strict'

const { existsSync } = require('fs')
const { resolve } = require('path')

const Helpers = use('Helpers')

class CheckForMaintenanceMode {
  async handle ({ response }, next) {
    if (existsSync(resolve(`${Helpers.appRoot()}/down`))) {
      return response
        .header('Retry-After', '1800')
        .status(503)
        .json({
          status: 'error',
          error:  'APi is currently under maintenance, please try again later',
        })
    }

    return next()
  }
}

module.exports = CheckForMaintenanceMode
