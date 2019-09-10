'use strict'

const Player = use('Player')

class PlayerController {
  async index () {
    return Player
      .query()
      .with('standingOrders')
      .fetch()
  }

  async show ({ params: { id } }) {
    return Player
      .query()
      .with('standingOrders')
      .where({ id })
      .first()
  }
}

module.exports = PlayerController
