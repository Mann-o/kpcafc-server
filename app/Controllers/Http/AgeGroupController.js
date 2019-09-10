'use strict'

const AgeGroup = use('AgeGroup')

class AgeGroupController {
  async index () {
    return AgeGroup
      .query()
      .with('teams.players.standingOrders')
      .fetch()
  }

  async show ({ params: { id } }) {
    return AgeGroup
      .query()
      .with('teams.players.standingOrders')
      .where({ id })
      .first()
  }
}

module.exports = AgeGroupController
