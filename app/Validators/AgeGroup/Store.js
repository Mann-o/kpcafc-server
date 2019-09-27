'use strict'

const BaseValidator = use('BaseValidator')

class AgeGroupStoreValidator extends BaseValidator {
  get rules () {
    return {
      name:       'required|min:5|alphaNumeric',
      short_name: 'required|min:2|alphaNumeric',
    }
  }

  get messages () {
    return {
      'name.required':           'Name field required',
      'name.min':                'Name field must contain at least 5 characters',
      'name.alphaNumeric':       'Name field must be alphanumeric (letters and numbers) only',
      'short_name.required':     'Name field required',
      'short_name.min':          'Name field must contain at least 2 characters',
      'short_name.alphaNumeric': 'Name field must be alphanumeric (letters and numbers) only',
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = AgeGroupStoreValidator
