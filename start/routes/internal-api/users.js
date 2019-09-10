'use strict'

const Route = use('Route')

Route.get('users', 'UserController.index')

Route.get('users/:id', 'UserController.show')

Route
  .post('users', 'UserController.store')
  .middleware([
    'auth',
    'is:administrator',
    'json-deserialiser',
  ])
  .validator('User/Store')

Route
  .patch('users/:id', 'UserController.update')
  .middleware([
    'auth',
    'is:administrator',
    'json-deserialiser',
  ])
  .validator('User/Update')

Route
  .delete('users/:id', 'UserController.destroy')
  .middleware([
    'auth',
    'is:administrator',
  ])

Route
  .patch('users/:id/reset-password', 'UserController.resetPassword')
  .middleware([
    'auth',
    'is:administrator',
    'json-deserialiser',
  ])
  .validator('User/ResetPassword')
