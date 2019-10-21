'use strict'

const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider',
  'adonis-acl/providers/CommandsProvider',
  'adonis-cache/providers/CommandsProvider',
]

const aliases = {
  ...require('./aliases/controllers'),
  ...require('./aliases/models'),
  ...require('./aliases/serializers'),
  ...require('./aliases/validators'),
  ...require('./aliases/vendor'),
}

const commands = [
  'App/Commands/Api/Down',
  'App/Commands/Api/Up',
  'App/Commands/Cache/Clear',
]

const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/redis/providers/RedisProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
  'adonis-acl/providers/AclProvider',
  'adonis-cache/providers/CacheProvider',
]

module.exports = {
  aceProviders,
  aliases,
  commands,
  providers,
}
