'use strict'

const BaseSchema = require('../helpers/BaseSchema')

class CreatePlayersSchema extends BaseSchema {
  up () {
    this.create('players', (table) => {
      table.increments()
      table.integer('team_id').unsigned().index()
      table.foreign('team_id').references('id').on('teams').onDelete('cascade')
      table.string('first_name', 80).notNullable()
      table.string('last_names', 80).notNullable()
      table.enum('gender', null, this._enumOptions('gender_type')).notNullable()
      table.date('date_of_birth').nullable()
      table.enum('status', null, this._enumOptions('player_status_type')).notNullable()
      table.boolean('is_public').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('players')
  }
}

module.exports = CreatePlayersSchema
