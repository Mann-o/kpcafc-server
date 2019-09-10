'use strict'

const BaseModel = use('BaseModel')

class Application extends BaseModel {
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Application
