'use strict'

const chalk = require('chalk')

const Database = use('Database')
const Factory = use('Factory')

class UserSeeder {
  async run () {
    try {
      console.log('seeding: 0001_users')
      await Factory.model('User').create({
        username: 'lpotter',
        email_address: 'me@liam-potter.co.uk',
        first_name: 'Liam',
        last_names: 'Potter',
        gender: 'male',
      })
      await Factory.model('User').createMany(19)
      console.log(`${chalk.green('seeded:')} 0001_users`)
    } catch (error) {
      console.log(error)
      await Database.close()
      return
    }
  }
}

module.exports = UserSeeder
