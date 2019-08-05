'use strict'

const Route = use('Route')

Route
  .group('api', () => {
    Route.post('auth/login', 'AuthController.login')
    Route.get('auth/user', 'AuthController.getAuthenticatedUser')

    Route.get('users', 'UserController.index')
    Route.get('users/:id', 'UserController.show')
    Route.post('users', 'UserController.store').middleware(['auth', 'is:administrator']).validator('User/Store')
    Route.patch('users/:id', 'UserController.update').middleware(['auth', 'is:administrator']).validator('User/Update')
    Route.delete('users/:id', 'UserController.destroy').middleware(['auth', 'is:administrator'])
    Route.patch('users/:id/reset-password', 'UserController.resetPassword').middleware(['auth', 'is:administrator']).validator('User/ResetPassword')

    Route.get('age-groups', 'AgeGroupController.index')
    Route.get('age-groups/:id', 'AgeGroupController.show')

    Route.get('teams', 'TeamController.index')
    Route.get('teams/:id', 'TeamController.show')

    Route.get('players', 'PlayerController.index')
    Route.get('players/:id', 'PlayerController.show')

    Route.get('standing-orders', 'StandingOrderController.index')
    Route.get('standing-orders/:id', 'StandingOrderController.show')
  })
  .prefix('api/v1')
  .middleware([
    'check-app-key-header',
  ])
