'use strict'

const Server = use('Server')

const globalMiddleware = [
  'Adonis/Middleware/BodyParser',
  'App/Middleware/ConvertEmptyStringsToNull',
]

const namedMiddleware = {
  auth: 'Adonis/Middleware/Auth',
  can: 'Adonis/Acl/Can',
  guest: 'Adonis/Middleware/AllowGuestOnly',
  is: 'Adonis/Acl/Is',
  'check-app-key-header': 'App/Middleware/CheckAppKeyHeader',
  'json-deserialiser': 'App/Middleware/JsonDeserialiser',
  'rate-limit-throttler': 'App/Middleware/RateLimitThrottler',
  'validate-api-key': 'App/Middleware/ValidateApiKey',
}

const serverMiddleware = [
  'Adonis/Middleware/Cors',
]

Server
  .registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware)
  .use(serverMiddleware)
