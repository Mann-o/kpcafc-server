'use strict'

const BaseModel = use('BaseModel')

class Team extends BaseModel {
  ageGroup () {
    return this.belongsTo('AgeGroup')
  }

  players () {
    return this.hasMany('Player')
  }
}

module.exports = Team
