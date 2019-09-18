'use strict'

const Route = use('Route')

Route
  .get('age-groups', 'AgeGroupController.index')
  .middleware([
    'auth',
    'is:administrator',
  ])

Route
  .get('age-groups/:id', 'AgeGroupController.show')
  .middleware([
    'auth',
    'is:administrator',
  ])

Route
  .post('age-groups', 'AgeGroupController.store')
  .middleware([
    'auth',
    'is:administrator',
    'json-deserialiser',
  ])
  .validator('AgeGroup/Store')

Route
  .patch('age-groups/:id', 'AgeGroupController.update')
  .middleware([
    'auth',
    'is:administrator',
    'json-deserialiser',
  ])
  .validator('AgeGroup/Update')

Route
  .delete('age-groups/:id', 'AgeGroupController.destroy')
  .middleware([
    'auth',
    'is:administrator',
  ])
