'use strict'

const BaseSchema = require('../helpers/BaseSchema')

class CreateUsersSchema extends BaseSchema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('email_address', 254).notNullable().unique()
      table.string('first_names', 80).notNullable()
      table.string('last_names', 80).nullable()
      table.enum('gender', null, this._enumOptions('gender_type')).notNullable()
      table.date('date_of_birth').nullable()
      table.datetime('last_logged_in').nullable()
      table.boolean('is_public').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = CreateUsersSchema
