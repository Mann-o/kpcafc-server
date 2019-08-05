'use strict'

const BaseModel = use('BaseModel')
const Hash = use('Hash')

class User extends BaseModel {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get traits () {
    return [
      '@provider:Adonis/Acl/HasPermission',
      '@provider:Adonis/Acl/HasRole',
    ]
  }

  static get hidden () {
    return [
      'password',
    ]
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

module.exports = User
