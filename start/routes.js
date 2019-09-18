'use strict'

const Route = use('Route')

/**
 * Test route
 */
Route.get('/', ({ response }) => {
  return response
    .status(419)
    .json({
      message: 'Not what you are looking for 👀',
    })
})

/**
 * Authentication routes
 */
Route.post('auth/login', 'AuthController.login')
Route
  .get('auth/me', 'AuthController.getAuthenticatedUser')
  .middleware(['auth'])

/**
 * Authenticated user routes
 */
Route
  .group('Authenticated Users', () => {
    require('./routes/teams')
    require('./routes/players')
    require('./routes/standing-orders')
  })
  .prefix('api/v1')
  .middleware([
    'check-app-key-header',
    'rate-limit-throttler',
    'json-deserialiser',
  ])

/**
 * Administrative user routes
 */
Route
  .group('Administration', () => {
    require('./routes/admin/users')
    require('./routes/admin/age-groups')
    require('./routes/admin/teams')
  })
  .prefix('api/v1/admin')
  .middleware([
    'check-app-key-header',
    'json-deserialiser',
  ])
