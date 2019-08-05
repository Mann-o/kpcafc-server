'use strict'

const chalk = require('chalk')

const Database = use('Database')
const Factory = use('Factory')
const { PLAYERS } = use('App/Constants/DefaultACLData')

class PlayerSeeder {
  async run () {
    try {
      console.log('seeding: 0007_players')
      for (let { team_id, first_name, last_names, gender, date_of_birth, status } of PLAYERS) {
        await Factory.model('Player').create({
          team_id,
          first_name,
          last_names,
          gender,
          date_of_birth,
          status,
        })
      }
      await Factory.model('Player').createMany(98)
      console.log(`${chalk.green('seeded:')} 0007_players`)
    } catch (error) {
      console.log(error)
      await Database.close()
      return
    }
  }
}

module.exports = PlayerSeeder
