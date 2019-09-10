'use strict'

const Route = use('Route')

Route.get('teams', 'TeamController.index')

Route.get('teams/:id', 'TeamController.show')
