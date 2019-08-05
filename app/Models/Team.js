'use strict'

const BaseModel = use('BaseModel')

class Team extends BaseModel {
  age_group () {
    return this.belongsTo('AgeGroup')
  }

  players () {
    return this.hasMany('Player')
  }
}

module.exports = Team
