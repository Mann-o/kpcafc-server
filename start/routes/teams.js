'use strict'

const Route = use('Route')

Route
  .get('teams', 'TeamController.index')

Route
  .get('teams/:id', 'TeamController.show')
  .middleware([
    'is:administrator',
  ])

Route
  .post('teams', 'TeamController.store')
  .middleware([
    'is:administrator',
  ])

Route
  .patch('teams', 'TeamController.update')
  .middleware([
    'is:administrator',
  ])

Route
  .delete('teams', 'TeamController.destroy')
  .middleware([
    'is:administrator',
  ])
