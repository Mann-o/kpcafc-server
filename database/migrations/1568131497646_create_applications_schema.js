'use strict'

const Schema = use('Schema')

class ApplicationsSchema extends Schema {
  up () {
    this.create('applications', (table) => {
      table.increments()
      table.integer('user_id').unsigned().index()
      table.foreign('user_id').references('id').on('users').onDelete('cascade')
      table.string('application_name').notNullable()
      table.uuid('api_key').notNullable()
      table.integer('rate_limit').notNullable().defaultTo(60)
      table.boolean('revoked').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('applications')
  }
}

module.exports = ApplicationsSchema
