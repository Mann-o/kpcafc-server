'use strict'

const CorsConfig = {
  origin: false,
  methods: [
    'GET',
    'PUT',
    'PATCH',
    'POST',
    'DELETE',
  ],
  headers: true,
  exposeHeaders: false,
  credentials: false,
  maxAge: 90,
}

module.exports = CorsConfig
