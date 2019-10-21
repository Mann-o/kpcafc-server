'use strict'
const chalk = require('chalk')

const Database = use('Database')
const User = use('User')

class ContactSeeder {
  async run () {
    try {
      console.log('seeding: 0011_manager_teams')
      const user = await User.query().select('id').first()
      await user.teams().attach([6, 7], (row) => {
        row.created_at = new Date()
        row.updated_at = new Date()
      })
      console.log(`${chalk.green('seeded:')} 0011_manager_teams`)
    } catch (error) {
      console.log(error)
      await Database.close()
      return
    }
  }
}

module.exports = ContactSeeder
