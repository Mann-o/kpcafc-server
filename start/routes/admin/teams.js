'use strict'

const Route = use('Route')

Route
  .get('teams', 'TeamController.index')
  .middleware([
    'auth',
    'is:administrator',
  ])

Route
  .get('teams/:id', 'TeamController.show')
  .middleware([
    'auth',
    'is:administrator',
  ])

Route
  .post('teams', 'TeamController.store')
  .middleware([
    'auth',
    'is:administrator',
    'json-deserialiser',
  ])
  .validator('Team/Store')

Route
  .patch('teams/:id', 'TeamController.update')
  .middleware([
    'auth',
    'is:administrator',
    'json-deserialiser',
  ])
  .validator('Team/Update')

Route
  .delete('teams/:id', 'TeamController.destroy')
  .middleware([
    'auth',
    'is:administrator',
  ])
