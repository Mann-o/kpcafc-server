'use strict'

const Route = use('Route')

Route.get('/', ({ response }) => {
  return response
    .status(419)
    .json({
      message: 'Not what you are looking for 👀',
    })
})

Route
  .group('Internal API', () => {
    require('./routes/internal-api/auth')
    require('./routes/internal-api/users')
    require('./routes/internal-api/age-groups')
    require('./routes/internal-api/teams')
    require('./routes/internal-api/players')
    require('./routes/internal-api/standing-orders')
  })
  .prefix('data')
  .middleware([
    'check-app-key-header',
  ])

Route
  .group('Public API', () => {
    Route.get('/users', 'UserController.publicIndex')
  })
  .prefix('api/v1')
  .middleware([
    'validate-api-key',
    'rate-limit-throttler',
  ])
