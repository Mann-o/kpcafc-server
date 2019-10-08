'use strict'

const BaseModel = use('BaseModel')

class Contact extends BaseModel {
  user () {
    return this.belongsTo('User')
  }
}

module.exports = Contact
