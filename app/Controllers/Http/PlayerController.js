'use strict'

const Player = use('Player')

class PlayerController {
  async index () {
    return Player
      .query()
      .with('standing_orders')
      .fetch()
  }

  async show ({ params: { id } }) {
    return Player
      .query()
      .with('standing_orders')
      .where({ id })
      .first()
  }
}

module.exports = PlayerController
