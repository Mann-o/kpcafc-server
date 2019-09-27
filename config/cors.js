'use strict'

const CorsConfig = {
  methods: [
    'GET',
    'PUT',
    'PATCH',
    'POST',
    'DELETE',
  ],
  origin:        false,
  headers:       true,
  exposeHeaders: false,
  credentials:   false,
  maxAge:        90,
}

module.exports = CorsConfig
