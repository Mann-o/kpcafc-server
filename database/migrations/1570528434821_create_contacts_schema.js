'use strict'

const BaseSchema = require('../helpers/BaseSchema')

class ContactsSchema extends BaseSchema {
  up () {
    this.create('contacts', (table) => {
      table.increments()
      table.integer('user_id').unsigned().index()
      table.foreign('user_id').references('id').on('users').onDelete('cascade')
      table.enum('type', null, this._enumOptions('contact_type')).notNullable().defaultTo('personal')
      table.string('first_names').notNullable()
      table.string('last_names').notNullable()
      table.string('telephone_number').nullable()
      table.string('email_address').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('contacts')
  }
}

module.exports = ContactsSchema
