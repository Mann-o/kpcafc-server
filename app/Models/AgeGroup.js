'use strict'

const BaseModel = use('BaseModel')

class AgeGroup extends BaseModel {
  teams () {
    return this.hasMany('Team')
  }
}

module.exports = AgeGroup
