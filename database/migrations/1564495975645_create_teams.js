'use strict'

const BaseSchema = require('../helpers/BaseSchema')

class CreateTeamsSchema extends BaseSchema {
  up () {
    this.create('teams', (table) => {
      table.increments()
      table.integer('age_group_id').unsigned().index()
      table.foreign('age_group_id').references('id').on('age_groups').onDelete('cascade')
      table.string('slug', 254).notNullable().unique()
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
