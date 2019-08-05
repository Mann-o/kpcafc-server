'use strict'

const GenericException = use('GenericException')
const Logger = use('Logger')
const User = use('User')

class UserController {
  async index () {
    try {
      return User
        .query()
        .fetch()
    } catch (error) {
      Logger.error(error)
    }
  }

  async show ({ params: { id } }) {
    return User
      .query()
      .where({ id })
      .first()
  }

  async store ({ request }) {

  }
}

module.exports = UserController
