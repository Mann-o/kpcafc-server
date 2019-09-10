'use strict'

const Schema = use('Schema')

class CreateTeamsSchema extends Schema {
  up () {
    this.create('teams', (table) => {
      table.increments()
      table.integer('age_group_id').unsigned().index()
      table.foreign('age_group_id').references('id').on('age_groups').onDelete('cascade')
      table.string('name', 254).notNullable()
      table.boolean('is_public').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('teams')
  }
}

module.exports = CreateTeamsSchema
