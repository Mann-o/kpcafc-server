'use strict'

const BaseValidator = use('BaseValidator')

class UserUpdateValidator extends BaseValidator {
  get rules () {
    return {
      id:            'number|above:0|exists:users,id',
      username:      `required|unique:users,username,id,${this.ctx.params.id}|alphaNumeric|min:3`,
      email_address: `required|unique:users,email_address,id,${this.ctx.params.id}|email`,
      first_name:    'required|min:2',
      gender:        'required|in:male,female',
    }
  }

  get messages () {
    return {
      'id.number':              'User ID must be a valid number',
      'id.above':               'User ID must be above 0',
      'id.exists':              'User does not exist',
      'username.required':      'Username field required',
      'username.unique':        'Username is already in use',
      'username.alphaNumeric':  'Username field must be alphanumeric (letters and numbers) only',
      'username.min':           'Username field must contain at least 3 characters',
      'email_address.required': 'Email address field required',
      'email_address.unique':   'Email address is already in use',
      'email_address.email':    'Email address field must be valid email address',
      'first_name.required':    'First name field required',
      'first_name.min':         'First name field must contain at least 2 characters',
      'gender.required':        'Gender field required',
      'gender.in':              'Gender field must be either male or female',
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = UserUpdateValidator
