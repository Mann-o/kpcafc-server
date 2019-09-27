'use strict'

const BaseValidator = use('BaseValidator')

class UserStoreValidator extends BaseValidator {
  get rules () {
    return {
      username:      'required|unique:users,username|alphaNumeric|min:3',
      password:      'required|min:6',
      email_address: 'required|unique:users,email_address|email',
      first_name:    'required|min:2',
      gender:        'required|in:male,female',
    }
  }

  get messages () {
    return {
      'username.required':      'Username field required',
      'username.unique':        'Username is already in use',
      'username.alphaNumeric':  'Username field must be alphanumeric (letters and numbers) only',
      'username.min':           'Username field must contain at least 3 characters',
      'password.required':      'Password field required',
      'password.min':           'Password field must contain at least 6 characters',
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

module.exports = UserStoreValidator
