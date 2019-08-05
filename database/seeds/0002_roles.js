'use strict'

const chalk = require('chalk')

const Database = use('Database')
const Factory = use('Factory')
const { ROLES } = use('App/Constants/DefaultACLData')

class RoleSeeder {
  async run () {
    try {
      console.log('seeding: 0002_roles')
      for (let { name } of ROLES) {
        await Factory.get('roles').create({ name })
      }
      console.log(`${chalk.green('seeded:')} 0002_roles`)
    } catch (error) {
      console.log(error)
      await Database.close()
      return
    }
  }
}

module.exports = RoleSeeder
