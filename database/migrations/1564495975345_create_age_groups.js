'use strict'

const BaseSchema = require('../helpers/BaseSchema')

class CreateAgeGroupsSchema extends BaseSchema {
  up () {
    this.create('age_groups', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.string('short_name', 80).notNullable()
      table.boolean('is_public').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('age_groups')
  }
}

module.exports = CreateAgeGroupsSchema
