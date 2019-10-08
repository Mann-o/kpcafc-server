'use strict'

const {
  CONTACT_TYPES,
  GENDER_TYPES,
  PLAYER_STATUS_TYPES,
} = use('App/Constants/Enums')
const BaseSchema = require('../helpers/BaseSchema')

class CreateEnumsSchema extends BaseSchema {
  up () {
    this.raw('DROP TYPE IF EXISTS gender_type')
    this.raw('DROP TYPE IF EXISTS player_status_type')
    this.raw(`CREATE TYPE "contact_type" AS ENUM (${this._toEnum(CONTACT_TYPES)})`)
    this.raw(`CREATE TYPE "gender_type" AS ENUM (${this._toEnum(GENDER_TYPES)})`)
    this.raw(`CREATE TYPE "player_status_type" AS ENUM (${this._toEnum(PLAYER_STATUS_TYPES)})`)
  }

  down () {
    this.raw('DROP TYPE IF EXISTS player_status_type')
    this.raw('DROP TYPE IF EXISTS gender_type')
    this.raw('DROP TYPE IF EXISTS contact_type')
  }
}

module.exports = CreateEnumsSchema
