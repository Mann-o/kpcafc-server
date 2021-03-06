'use strict'

const BaseSchema = require('../helpers/BaseSchema')

class CreatePermissionRoleSchema extends BaseSchema {
  up () {
    this.create('permission_role', (table) => {
      table.increments()
      table.integer('permission_id').unsigned().index()
      table.foreign('permission_id').references('id').on('permissions').onDelete('cascade')
      table.integer('role_id').unsigned().index()
      table.foreign('role_id').references('id').on('roles').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('permission_role')
  }
}

module.exports = CreatePermissionRoleSchema
