'use strict'

const Team = use('Team')

class TeamController {
  async index ({ auth }) {
    const user = await auth.getUser()
    return user.teams().with('players').fetch()
  }

  async show ({ params: { id } }) {
    return Team
      .query()
      .with('age_group')
      .with('players.standingOrders')
      .where({ id })
      .first()
  }

  async store ({ request }) {

  }
}

module.exports = TeamController
