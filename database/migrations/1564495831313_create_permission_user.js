'use strict'

const BaseSchema = require('../helpers/BaseSchema')

class CreatePermissionUserSchema extends BaseSchema {
  up () {
    this.create('permission_user', (table) => {
      table.increments()
      table.integer('permission_id').unsigned().index()
      table.foreign('permission_id').references('id').on('permissions').onDelete('cascade')
      table.integer('user_id').unsigned().index()
      table.foreign('user_id').references('id').on('users').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('permission_user')
  }
}

module.exports = CreatePermissionUserSchema
