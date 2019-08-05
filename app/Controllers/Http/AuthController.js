'use strict'

const User = use('User')

class AuthController {
  async login ({ auth, request, response }) {
    try {
      const { login_id, password } = request.post()

      const user = await User
        .query()
        .select(['id', 'username', 'email_address', 'last_logged_in'])
        .whereRaw('lower(username) = ?', login_id.toLowerCase())
        .orWhereRaw('lower(email_address) = ?', login_id.toLowerCase())
        .first()

      if (user != null) {
        const payload = await auth.attempt(user.email_address, password)
        user.last_logged_in = new Date()
        user.save()
        return { status: 'success', payload, user }
      }
    } catch (error) {
      console.log(error)
      return response
        .header('WWW_Authenticate', 'Bearer token_type="JWT"')
        .status(401)
        .json({
          status: 'error',
          error: 'Invalid login ID or password',
        })
    }
  }

  async getAuthenticatedUser ({ auth }) {
    const user = await auth.getUser()
    const roles = await user.getRoles()
    return {
      ...user.toJSON(),
      roles,
    }
  }
}

module.exports = AuthController
