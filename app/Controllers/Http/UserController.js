'use strict'

const Hash = use('Hash')
const Logger = use('Logger')
const User = use('User')

class UserController {
  async index () {
    try {
      return User
        .query()
        .fetch()
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async show ({ params: { id }, response }) {
    try {
      return User
        .query()
        .where({ id })
        .first()
    } catch (error) {
      console.log(error)
      return response.notFound()
    }
  }

  async store ({ request }) {
    try {
      await User.create(request.post())
      return { status: 'success' }
    } catch (error) {
      console.log(error.message)
      return { status: 'failed' }
    }
  }

  async update ({ request, params: { id } }) {
    try {
      const user = await User.find(id)
      user.merge(request.post())
      await user.save()
      return { status: 'success' }
    } catch (error) {
      console.log(error.message)
      return { status: 'failed' }
    }
  }

  async destroy ({ params: { id } }) {
    try {
      const user = await User.find(id)
      await user.delete()
      return { status: 'success' }
    } catch (error) {
      console.log(error.message)
      return { status: 'failed' }
    }
  }

  async resetPassword ({ request, params: { id } }) {
    try {
      const { new_password } = request.post()
      const user = await User.find(id)
      user.password = new_password
      await user.save()
      return { status: 'success'}
    } catch (error) {
      console.log(error)
      return { status: 'failed' }
    }
  }
}

module.exports = UserController
