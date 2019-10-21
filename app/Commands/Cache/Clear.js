'use strict'

const { Command } = require('@adonisjs/ace')

const Redis = use('Redis')

class CacheClear extends Command {
  static get signature () {
    return 'kpcafc:cache:clear'
  }

  static get description () {
    return 'Clear any cached data in Redis'
  }

  async handle () {
    try {
      this.info('Clearing all cached data...')
      await Redis.flushall()
      return this.success('All cached data cleared successfully!')
    } catch (error) {
      return this.warn('Failed to clear all cached data')
    }
  }
}

module.exports = CacheClear
