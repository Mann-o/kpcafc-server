'use strict'

const Env = use('Env')

const RedisConfig = {
  connection: Env.get('REDIS_CONNECTION', 'local'),

  local: {
    host:      '127.0.0.1',
    port:      6379,
    password:  null,
    db:        0,
    keyPrefix: '',
  },

  cluster: {
    clusters: [
      {
        host:     '127.0.0.1',
        port:     6379,
        password: null,
        db:       0,
      },
      {
        host:     '127.0.0.1',
        port:     6380,
        password: null,
        db:       0,
      },
    ],
  },
}

module.exports = RedisConfig
