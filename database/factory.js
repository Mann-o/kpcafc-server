'use strict'

const format = require('date-fns/format')
const {
  date: { past },
  internet: { exampleEmail, userName },
  lorem: { word, words, sentence },
  name: { firstName, lastName },
  phone: { phoneNumber },
  random: { arrayElement, boolean, uuid },
} = require('faker')

const {
  CONTACT_TYPES,
  GENDER_TYPES,
  PLAYER_STATUS_TYPES,
} = use('App/Constants/Enums')
const Factory = use('Factory')

Factory.blueprint('User', async (faker, i, { email_address, username, first_name, last_names, gender }) => ({
  username: fakeOrNot(username, userName().toLowerCase()),
  email_address: fakeOrNot(email_address, exampleEmail().toLowerCase()),
  password: 'password',
  first_names: fakeOrNot(first_name, firstName()),
  last_names: fakeOrNot(last_names, lastName()),
  gender: fakeOrNot(gender, arrayElement(GENDER_TYPES)),
  ...(boolean() && { is_public: true }),
}))

Factory.blueprint('roles', async (faker, i, { name, description }) => {
  let roleText = word()
  roleText = `${roleText.charAt(0).toUpperCase()}${roleText.slice(1)}`
  return {
    slug:        fakeOrNot(name, roleText, true),
    name:        fakeOrNot(name, roleText),
    description: fakeOrNot(description, sentence()),
  }
})

Factory.blueprint('permissions', async (faker, i, { name, description }) => {
  let permissionText = word()
  permissionText = `${permissionText.charAt(0).toUpperCase()}${permissionText.slice(1)}`
  return {
    slug:        fakeOrNot(name, permissionText, true),
    name:        fakeOrNot(name, permissionText),
    description: fakeOrNot(description, sentence()),
  }
})
Factory.blueprint('AgeGroup', async (faker, i, { name, short_name }) => ({
  name,
  short_name,
  ...(boolean() && { is_public: true }),
}))

Factory.blueprint('Team', async (faker, i, { name, age_group_id }) => ({
  age_group_id,
  name,
  ...(boolean() && { is_public: true }),
}))

Factory.blueprint('Player', async (faker, i, player) => ({
  team_id:       fakeOrNot(player.team_id, arrayElement([...Array(16).keys()].slice(1))),
  first_name:    fakeOrNot(player.first_name, firstName()),
  last_names:    fakeOrNot(player.last_names, lastName()),
  gender:        fakeOrNot(player.gender, arrayElement(GENDER_TYPES)),
  date_of_birth: fakeOrNot(player.date_of_birth, format(past(), 'y-MM-dd')),
  status:        fakeOrNot(player.status, arrayElement(PLAYER_STATUS_TYPES)),
  ...(boolean() && { is_public: true }),
}))

Factory.blueprint('StandingOrder', async (faker, i, { player_id, reference, active }) => ({
  player_id,
  reference,
  active: fakeOrNot(active, boolean()),
}))

Factory.blueprint('Application', async (faker, i, { user_id }) => ({
  user_id,
  application_name: words(),
  api_key: uuid(),
}))

Factory.blueprint('Contact', async (faker, i, { user_id }) => ({
  user_id,
  type: arrayElement(CONTACT_TYPES),
  first_names: firstName(),
  last_names: lastName(),
  telephone_number: phoneNumber(),
  email_address: exampleEmail(),
}))

function slugify (str) {
  return str
    .replace(/ /g, '_')
    .replace(/[^\w\.\-]+/g, '')
    .toLowerCase()
}

function fakeOrNot (valueToCheck, fakedValue, toSlug = false) {
  return (valueToCheck != null)
    ? (toSlug ? slugify(valueToCheck) : valueToCheck)
    : (toSlug ? slugify(fakedValue) : fakedValue)
}
