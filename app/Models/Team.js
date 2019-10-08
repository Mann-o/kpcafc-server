'use strict'

const BaseModel = use('BaseModel')

class Team extends BaseModel {
  ageGroup () {
    return this.belongsTo('AgeGroup')
  }

  players () {
    return this.hasMany('Player')
  }

  fixtures () {
    return this.hasMany('Fixture')
  }

  strips () {
    return this.hasMany('Strip')
  }
}

module.exports = Team
