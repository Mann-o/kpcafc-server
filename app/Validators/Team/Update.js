'use strict'

const BaseValidator = use('BaseValidator')

class TeamUpdateValidator extends BaseValidator {
  get rules () {
    return {
      id: 'number|above:0|exists:teams,id',
      name: 'required|min:5|alphaNumeric',
    }
  }

  get messages () {
    return {
      'id.number': 'Team ID must be a valid number',
      'id.above': 'Team ID must be above 0',
      'id.exists': 'Team does not exist',
      'name.required': 'Name field required',
      'name.min': 'Name field must contain at least 5 characters',
      'name.alphaNumeric': 'Name field must be alphanumeric (letters and numbers) only',
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = TeamUpdateValidator
