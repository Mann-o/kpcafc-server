'use strict'

const Schema = use('Schema')

class BaseSchema extends Schema {
  _toEnum (arr) {
    return arr
      .map((x) => `'${x}'`)
      .join(', ')
  }

  _enumOptions (enumName) {
    return {
      useNative: true,
      existingType: true,
      enumName,
    }
  }
}

module.exports = BaseSchema
