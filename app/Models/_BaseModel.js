'use strict'

const Model = use('Model')

class BaseModel extends Model {
  static _bootIfNotBooted () {
    if (this.name !== 'BaseModel') {
      super._bootIfNotBooted()
    }
  }

  static get Serializer () {
    return use('JsonSerializer')
  }
}

module.exports = BaseModel
