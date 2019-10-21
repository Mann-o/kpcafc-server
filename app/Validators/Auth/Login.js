'use strict'

const BaseValidator = use('BaseValidator')

class AuthLoginValidator extends BaseValidator {
  get rules () {
    return {
      login_id: 'required|min:4',
      password: 'required|min:6',
    }
  }

  get messages () {
    return {
      'login_id.required': 'Login ID required',
      'login_id.min': 'Login ID must contain at least 4 characters',
      'password.required': 'Password required',
      'password.min': 'Password must contain at least 6 characters',
    }
  }
}

module.exports = AuthLoginValidator
