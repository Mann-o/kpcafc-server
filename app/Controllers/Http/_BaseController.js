'use strict'

const Cache = use('Cache')

class BaseController {
  async getCachedItem ({ model, cacheKey }) {
    const cachedItem = await Cache.get(`${model.toLowerCase()}:${cacheKey}`)

    if (cachedItem != null) return cachedItem

    const itemToCache = await model
      .query()
      .where({ cacheKey })
      .first()

    if (itemToCache == null) return null

    await Cache.put(`${model.toLowerCase()}:${cacheKey}`, itemToCache.toJSON(), 30)
    return itemToCache.toJSON()
  }

  async clearCache ({ model, cacheKey = null }) {
    await Cache.forget(model.toLowerCase())
    if (cacheKey != null) {
      await Cache.forget(`${model.toLowerCase()}:${cacheKey}`)
    }
  }
}

module.exports = BaseController
