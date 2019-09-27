'use strict'

const BaseValidator = use('BaseValidator')

class AgeGroupUpdateValidator extends BaseValidator {
  get rules () {
    return {
      id:         'number|above:0|exists:age_groups,id',
      name:       'required|min:5|alphaNumeric',
      short_name: 'required|min:2|alphaNumeric',
    }
  }

  get messages () {
    return {
      'id.number':               'Age group ID must be a valid number',
      'id.above':                'Age group ID must be above 0',
      'id.exists':               'Age group does not exist',
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

module.exports = AgeGroupUpdateValidator
