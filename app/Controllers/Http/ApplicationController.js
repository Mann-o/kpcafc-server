'use strict'

const uuid4 = require('uuid/v4')

const Application = use('Application')

class ApplicationController {
  async index ({ auth }) {
    try {
      const { id: user_id } = await auth.getUser()

      return Application
        .query()
        .where({ user_id })
        .fetch()
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async show ({ auth, params: { id }, response }) {
    try {
      const { id: user_id } = await auth.getUser()

      return Application
        .query()
        .where({ user_id, id })
        .first()
    } catch (error) {
      console.log(error)
      return response.notFound()
    }
  }

  async store ({ auth, request }) {
    try {
      const { id: user_id } = await auth.getUser()

      await Application.create({
        user_id,
        api_key: uuid4(),
        ...request.post(),
      })

      return { status: 'success' }
    } catch (error) {
      console.log(error.message)
      return { status: 'failed' }
    }
  }

  async update ({ auth, request, params: { id } }) {
    try {
      const { id: user_id } = await auth.getUser()

      const application = await Application
        .query()
        .where({ id, user_id })
        .first()

      application.merge(request.post())
      await application.save()

      return { status: 'success' }
    } catch (error) {
      console.log(error.message)
      return { status: 'failed' }
    }
  }

  async destroy ({ auth, params: { id } }) {
    try {
      const { id: user_id } = await auth.getUser()

      const application = await Application
        .query()
        .where({ user_id, id })
        .first()

      await application.delete()

      return { status: 'success' }
    } catch (error) {
      console.log(error.message)
      return { status: 'failed' }
    }
  }
}

module.exports = ApplicationController
