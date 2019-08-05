'use strict'

const { GENDER_TYPES, PLAYER_STATUS_TYPES } = use('App/Constants/Enums')
const Schema = use('Schema')

class CreateEnumsSchema extends Schema {
  up () {
    this.raw('DROP TYPE IF EXISTS gender_type')
    this.raw('DROP TYPE IF EXISTS player_status_type')
    this.raw(`CREATE TYPE "gender_type" AS ENUM (${this._toEnum(GENDER_TYPES)})`)
    this.raw(`CREATE TYPE "player_status_type" AS ENUM (${this._toEnum(PLAYER_STATUS_TYPES)})`)
  }

  down () {
    this.raw('DROP TYPE IF EXISTS gender_type')
    this.raw('DROP TYPE IF EXISTS player_status_type')
  }

  _toEnum (arr) {
    return arr
      .map(x => `'${x}'`)
      .join(', ')
  }
}

module.exports = CreateEnumsSchema
