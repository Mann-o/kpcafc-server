'use strict'

const chalk = require('chalk')

const Database = use('Database')
const Factory = use('Factory')
const { PERMISSIONS } = use('App/Constants/DefaultACLData')

class PermissionSeeder {
  async run () {
    try {
      console.log('seeding: 0003_permissions')
      for (let { name } of PERMISSIONS) {
        await Factory.get('permissions').create({ name })
      }
      console.log(`${chalk.green('seeded:')} 0003_permissions`)
    } catch (error) {
      console.log(error)
      await Database.close()
      return
    }
  }
}

module.exports = PermissionSeeder
