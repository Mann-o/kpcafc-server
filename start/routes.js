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
  .group('api', () => {
    Route.get('/', () => ({
      restEndpoints: [
        '/auth',
        '/users',
        '/age-groups',
        '/teams',
        '/players',
        '/standing-orders',
      ],
    }))
    require('./routes/auth')
    require('./routes/users')
    require('./routes/age-groups')
    require('./routes/teams')
    require('./routes/players')
    require('./routes/standing-orders')
  })
  .prefix('api/v1')
  .middleware([
    'check-app-key-header',
  ])
