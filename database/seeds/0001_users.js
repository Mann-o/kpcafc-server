'use strict'

const chalk = require('chalk')

const Database = use('Database')
const Env = use('Env')
const Factory = use('Factory')

class UserSeeder {
  async run () {
    try {
      console.log('seeding: 0001_users')
      await Factory.model('User').create({
        username:      Env.get('TEST_USER_USERNAME', 'test'),
        email_address: Env.get('TEST_USER_EMAIL_ADDRESS', 'test@test.com'),
        first_name:    Env.get('TEST_USER_FIRST_NAME', 'first'),
        last_names:    Env.get('TEST_USER_LAST_NAMES', 'last'),
        gender:        Env.get('TEST_USER_GENDER', 'male'),
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
