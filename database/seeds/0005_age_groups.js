'use strict'

const chalk = require('chalk')

const Database = use('Database')
const Factory = use('Factory')
const { AGE_GROUPS } = use('App/Constants/DefaultACLData')

class AgeGroupSeeder {
  async run () {
    try {
      console.log('seeding: 0005_age_groups')
      for (let { name, short_name } of AGE_GROUPS) {
        await Factory.model('AgeGroup').create({ name, short_name })
      }
      console.log(`${chalk.green('seeded:')} 0005_age_groups`)
    } catch (error) {
      console.log(error)
      await Database.close()
      return
    }
  }
}

module.exports = AgeGroupSeeder
