'use strict'

const { Command } = require('@adonisjs/ace')

const Helpers = use('Helpers')

class Up extends Command {
  static get signature () {
    return 'kpcafc:api:up'
  }

  static get description () {
    return 'Take API out of maintenance mode.'
  }

  async handle () {
    try {
      await this.removeFile(`${Helpers.appRoot()}/down`)
      return this.info('KPCAFC API is now live!')
    } catch (error) {
      return this.info('KPCAFC API is already live!')
    }
  }
}

module.exports = Up
