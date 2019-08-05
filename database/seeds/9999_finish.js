'use strict'

const Database = use('Database')

class FinishSeeder {
  async run () {
    console.log('Closing database connection...')
    await Database.close()
    return
  }
}

module.exports = FinishSeeder
