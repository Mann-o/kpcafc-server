'use strict'

const Schema = use('Schema')

class CreateUserTeamsSchema extends Schema {
  up () {
    this.create('user_teams', (table) => {
      table.increments()
      table.integer('user_id').unsigned().index()
      table.foreign('user_id').references('id').on('users').onDelete('cascade')
      table.integer('team_id').unsigned().index()
      table.foreign('team_id').references('id').on('teams').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_teams')
  }
}

module.exports = CreateUserTeamsSchema
