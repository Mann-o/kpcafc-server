'use strict'

const Cache = use('Cache')

class BaseController {
  constructor () {
    this.model = null
    this.queryAgainst = null
    this.cacheKey = null
  }

  configureQueryData ({ model, queryAgainst }) {
    this.model = model
    this.queryAgainst = queryAgainst
  }

  async getCachedItem (cacheKey) {
    this.cacheKey = cacheKey

    const dataInCache = await Cache.get(`${this.model.name}:${this.cacheKey}`)

    return this.handleDataInCache(dataInCache)
  }

  handleDataInCache (dataInCache) {
    return (dataInCache != null)
      ? dataInCache
      : this.handleMissingCache()
  }

  async handleMissingCache () {
    const uncachedItem = await this.getUncachedItemFromDatabase()

    if (uncachedItem != null) {
      await Cache.put(
        `${this.model.name}:${this.cacheKey}`,
        uncachedItem.toJSON(),
        30
      )
      return uncachedItem.toJSON()
    }

    return null
  }

  getUncachedItemFromDatabase () {
    return this.model
      .query()
      .where({ [this.queryAgainst]: this.cacheKey })
      .first()
  }

  async clearCache ({ model, cacheKey = null }) {
    await Cache.forget(model.toLowerCase())
    if (cacheKey != null) {
      await Cache.forget(`${model.toLowerCase()}:${cacheKey}`)
    }
  }
}

module.exports = BaseController
