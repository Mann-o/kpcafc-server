'use strict'

const Route = use('Route')

Route.get('age-groups', 'AgeGroupController.index')

Route.get('age-groups/:id', 'AgeGroupController.show')
