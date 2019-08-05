'use strict'

const chalk = require('chalk')

const Database = use('Database')
const Factory = use('Factory')
const { TEAMS } = use('App/Constants/DefaultACLData')

class TeamSeeder {
  async run () {
    try {
      console.log('seeding: 0006_teams')
      for (let { age_group_id, name } of TEAMS) {
        await Factory.model('Team').create({ age_group_id, name })
      }
      console.log(`${chalk.green('seeded:')} 0006_teams`)
    } catch (error) {
      console.log(error)
      await Database.close()
      return
    }
  }
}

module.exports = TeamSeeder
