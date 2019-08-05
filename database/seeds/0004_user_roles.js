'use strict'

const chalk = require('chalk')

const Database = use('Database')

class UserRolesSeeder {
  async run () {
    try {
      console.log('seeding 0004_user_roles...')
      await Database.table('role_user').insert({
        user_id: 1,
        role_id: 1,
      })
      console.log(`${chalk.green('seeded:')} 0004_user_roles`)
    } catch (error) {
      console.log(error)
      await Database.close()
      return
    }
  }
}

module.exports = UserRolesSeeder
