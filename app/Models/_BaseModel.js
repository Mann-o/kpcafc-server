'use strict'

const Model = use('Model')

class BaseModel extends Model {
  static _bootIfNotBooted () {
    if (this.name !== 'BaseModel') {
      super._bootIfNotBooted()
    }
  }
}

module.exports = BaseModel
