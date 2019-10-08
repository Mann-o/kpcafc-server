'use strict'

const BaseSchema = require('../helpers/BaseSchema')

class CreateStandingOrdersSchema extends BaseSchema {
  up () {
    this.create('standing_orders', (table) => {
      table.increments()
      table.integer('player_id').unsigned().index()
      table.foreign('player_id').references('id').on('players').onDelete('cascade')
      table.string('reference', 80).nullable()
      table.boolean('active').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('standing_orders')
  }
}

module.exports = CreateStandingOrdersSchema
