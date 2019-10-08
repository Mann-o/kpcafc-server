'use strict'

const BaseModel = use('BaseModel')

class Strip extends BaseModel {
  team () {
    return this.belongsTo('Team')
  }

  player () {
    return this.belongsTo('Player')
  }
}

module.exports = Strip
