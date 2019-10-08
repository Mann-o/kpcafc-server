'use strict'
const chalk = require('chalk')

const Database = use('Database')
const Factory = use('Factory')
const User = use('User')

class ContactSeeder {
  async run () {
    try {
      console.log('seeding: 0010_contacts')
      const users = (await User.query().select('id').fetch()).toJSON()
      for (let { id: user_id } of users) {
        await Factory.model('Contact').create({ user_id })
      }
      console.log(`${chalk.green('seeded:')} 0010_contacts`)
    } catch (error) {
      console.log(error)
      await Database.close()
      return
    }
  }
}

module.exports = ContactSeeder
