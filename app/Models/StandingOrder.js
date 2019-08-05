'use strict'

const BaseModel = use('BaseModel')

class StandingOrder extends BaseModel {
  player () {
    return this.belongsTo('User')
  }
}

module.exports = StandingOrder
