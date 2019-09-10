'use strict'
const chalk = require('chalk')

const Database = use('Database')
const Factory = use('Factory')
const Player = use('Player')

class StandingOrderSeeder {
  async run () {
    try {
      console.log('seeding: 0008_standing_orders')
      const players = (await Player.query().with('team.ageGroup').fetch()).toJSON()
      for (let { id: playerId, team, firstName, lastNames } of players) {
        await Factory.model('StandingOrder').create({
          player_id: playerId,
          reference: `${team.ageGroup.shortName.toUpperCase()} LP ${firstName.charAt(0).toUpperCase()} ${lastNames.toUpperCase()}`,
        })
      }
      console.log(`${chalk.green('seeded:')} 0008_standing_orders`)
    } catch (error) {
      console.log(error)
      await Database.close()
      return
    }
  }
}

module.exports = StandingOrderSeeder
