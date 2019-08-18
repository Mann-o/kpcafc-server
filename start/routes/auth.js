'use strict'

const Route = use('Route')

Route.post('auth/login', 'AuthController.login')

Route.get('auth/user', 'AuthController.getAuthenticatedUser')
