'use strict'

const Database = use('Database')
const StandingOrder = use('StandingOrder')

class StandingOrderSeeder {
  async run () {
    try {
      console.log('seeding: 0008_standing_orders')
      await StandingOrder.createMany(require('../seeds-data/standing-orders'))
      console.log(`${chalk.green('seeded:')} 0008_standing_orders`)
    } catch (error) {
      console.log(error)
      await Database.close()
      return
    }
  }
}

module.exports = StandingOrderSeeder
