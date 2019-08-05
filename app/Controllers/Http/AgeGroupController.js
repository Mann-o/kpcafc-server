'use strict'

const AgeGroup = use('AgeGroup')

class AgeGroupController {
  async index () {
    return AgeGroup
      .query()
      .with('teams.players.standing_orders')
      .fetch()
  }

  async show ({ params: { id } }) {
    return AgeGroup
      .query()
      .with('teams.players.standing_orders')
      .where({ id })
      .first()
  }
}

module.exports = AgeGroupController
