'use strict'

const chalk = require('chalk')
const { existsSync } = require('fs')
const { hooks } = require('@adonisjs/ignitor')


hooks.after.providersBooted(() => {
  const Database = use('Database')
  const Validator = use('Validator')

  Validator.extend('exists', async (data, field, message, args) => {
    const value = data[field]
    if (!value) return

    const [table, column] = args

    if ((await Database.table(table).where(column, value).first() != null)) {
      throw message
    }
  })
})

hooks.before.httpServer(async () => {
  console.log(`${chalk.yellow('info:')} starting api server`)

  if (existsSync(`./down`)) {
    console.log(`${chalk.red('error:')} failed to start api server (maintenance mode active)`)
    console.log(`${chalk.red('error:')} please cancel process, deactivate maintenance mode, and re-run`)
    process.exit(0)
  }
})

hooks.after.httpServer(() => {
  console.log(`${chalk.green('info:')} api server started successfully 💪`)
})
