'use strict'

const Route = use('Route')

Route.get('standing-orders', 'StandingOrderController.index')

Route.get('standing-orders/:id', 'StandingOrderController.show')
