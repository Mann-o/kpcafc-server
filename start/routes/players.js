'use strict'

const Route = use('Route')

Route.get('players', 'PlayerController.index')

Route.get('players/:id', 'PlayerController.show')
