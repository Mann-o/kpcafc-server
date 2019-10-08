'use strict'

const BaseModel = use('BaseModel')

class Event extends BaseModel {
  user () {
    return this.belongsTo('User')
  }
}

module.exports = Event
