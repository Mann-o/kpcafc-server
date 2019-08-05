'use strict'
const chalk = require('chalk')

const Database = use('Database')
const Factory = use('Factory')
const Player = use('Player')

class StandingOrderSeeder {
  async run () {
    try {
      console.log('seeding: 0008_standing_orders')
      for (let { id: player_id, team, first_name, last_names } of (await Player.query().with('team.age_group').fetch()).toJSON()) {
        await Factory.model('StandingOrder').create({
          player_id,
          reference: `${team.age_group.short_name.toUpperCase()} LP ${first_name.charAt(0).toUpperCase()} ${last_names.toUpperCase()}`,
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
