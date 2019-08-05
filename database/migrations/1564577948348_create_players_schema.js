'use strict'

const Schema = use('Schema')

class CreatePlayersSchema extends Schema {
  up () {
    this.create('players', (table) => {
      table.increments()
      table.integer('team_id').unsigned().index()
      table.foreign('team_id').references('id').on('teams').onDelete('cascade')
      table.string('first_name', 80).notNullable()
      table.string('last_names', 80).notNullable()
      table.enu('gender', null, { useNative: true, existingType: true, enumName: 'gender_type' }).notNullable()
      table.date('date_of_birth').nullable()
      table.enu('status', null, { useNative: true, existingType: true, enumName: 'player_status_type' }).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('players')
  }
}

module.exports = CreatePlayersSchema
