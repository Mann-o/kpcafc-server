'use strict'

const StandingOrder = use('StandingOrder')

class StandingOrderController {
  async index () {
    return StandingOrder
      .query()
      .with('player')
      .fetch()
  }

  async show ({ params: { id } }) {
    return StandingOrder
      .query()
      .with('player')
      .where({ id })
      .first()
  }
}

module.exports = StandingOrderController
