'use strict'

const BaseModel = use('BaseModel')

class Fixture extends BaseModel {
  team () {
    return this.belongsTo('Team')
  }
}

module.exports = Fixture
