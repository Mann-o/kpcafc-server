'use strict'

const chalk = require('chalk')

const Database = use('Database')
const Factory = use('Factory')

class PlayerSeeder {
  async run () {
    try {
      console.log('seeding: 0007_players')
      await Factory.model('Player').createMany(100)
      console.log(`${chalk.green('seeded:')} 0007_players`)
    } catch (error) {
      console.log(error)
      await Database.close()
      return
    }
  }
}

module.exports = PlayerSeeder
