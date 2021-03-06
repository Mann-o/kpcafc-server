'use strict'

const BaseSchema = require('../helpers/BaseSchema')

class CreatePermissionsSchema extends BaseSchema {
  up () {
    this.create('permissions', (table) => {
      table.increments()
      table.string('slug').notNullable().unique()
      table.string('name').notNullable().unique()
      table.text('description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('permissions')
  }
}

module.exports = CreatePermissionsSchema
