'use strict'

const BaseModel = use('BaseModel')

class Player extends BaseModel {
  team () {
    return this.belongsTo('Team')
  }

  standingOrders () {
    return this.hasMany('StandingOrder')
  }

  strip () {
    return this.hasOne('Strip')
  }

  static get computed () {
    return [
      'full_name',
    ]
  }

  getFullName () {
    let fullName = this.first_name
    if (this.last_names != null) fullName += ` ${this.last_names}`
    return fullName
  }
}

module.exports = Player
