'use strict'

const BaseValidator = use('BaseValidator')

class UserResetPasswordValidator extends BaseValidator {
  get rules () {
    return {
      new_password: 'required|min:6|confirmed',
    }
  }

  get messages () {
    return {
      'new_password.required': 'New password is required',
      'new_password.min': 'New password must be at least 6 characters',
      'new_password.confirmed': 'New password confirmation field does not match',
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = UserResetPasswordValidator
