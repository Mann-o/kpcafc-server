'use strict'

const Team = use('Team')

class TeamController {
  async index () {
    return Team
      .query()
      .with('age_group')
      .with('players.standing_orders')
      .fetch()
  }

  async show ({ params: { id } }) {
    return Team
      .query()
      .with('age_group')
      .with('players.standing_orders')
      .where({ id })
      .first()
  }
}

module.exports = TeamController
