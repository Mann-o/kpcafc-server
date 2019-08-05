'use strict'

const { Command } = require('@adonisjs/ace')

const Helpers = use('Helpers')

class Down extends Command {
  static get signature () {
    return 'kpcafc:api:down'
  }

  static get description () {
    return 'Put API into maintenance mode'
  }

  async handle () {
    try {
      await this.writeFile(`${Helpers.appRoot()}/down`, 'API in maintenance mode')
      return this.info('KPCAFC API is now in maintenance mode!')
    } catch (error) {
      return this.info('KPCAFC API is already in maintenance mode!')
    }
  }
}

module.exports = Down
