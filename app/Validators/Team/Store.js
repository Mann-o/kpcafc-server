'use strict'

const BaseValidator = use('BaseValidator')

class TeamStoreValidator extends BaseValidator {
  get rules () {
    return {
      name: 'required|min:5|alphaNumeric',
    }
  }

  get messages () {
    return {
      'name.required':     'Name field required',
      'name.min':          'Name field must contain at least 5 characters',
      'name.alphaNumeric': 'Name field must be alphanumeric (letters and numbers) only',
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = TeamStoreValidator
