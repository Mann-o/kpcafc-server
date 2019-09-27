'use strict'

const Env = use('Env')
const Helpers = use('Helpers')

const DatabaseConfig = {
  connection: Env.get('DB_CONNECTION', 'pg'),

  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath('development.sqlite'),
    },
    useNullAsDefault: true,
    debug: Env.get('DB_DEBUG', false),
  },

  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'adonis'),
    },
    debug: Env.get('DB_DEBUG', false),
  },

  pg: {
    client: 'pg',
    connection: {
      host:     Env.get('DB_HOST', 'localhost'),
      port:     Env.get('DB_PORT', 5432),
      user:     Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'adonis'),
    },
    debug: (Env.get('DB_DEBUG').toLowerCase() === 'true'),
  },
}

module.exports = DatabaseConfig
