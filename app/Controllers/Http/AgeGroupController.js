'use strict'

const AgeGroup = use('AgeGroup')
const BaseController = use('BaseController')
const Cache = use('Cache')

class AgeGroupController extends BaseController {
  async index () {
    const ageGroups = await Cache.remember('age-groups', 30, async () => {
      return (await AgeGroup
        .query()
        .with('teams.players.standingOrders')
        .fetch()
      ).toJSON()
    })
    return ageGroups
  }

  async show ({ params: { slug }, response }) {
    const ageGroup = await this._getAgeGroup({ slug })

    return (ageGroup != null)
      ? ageGroup
      : response.notFound()
  }

  async _getAgeGroup ({ slug }) {
    const ageGroupInCache = await Cache.get(`age-group:${slug}`)

    if (ageGroupInCache != null) return ageGroupInCache

    const ageGroup = await AgeGroup
      .query()
      .with('teams.players.standingOrders')
      .where({ slug })
      .first()

    if (ageGroup == null) return null

    await Cache.put(`age-group:${slug}`, ageGroup.toJSON(), 30)
    return ageGroup.toJSON()
  }

  async _clearCachedAgeGroups (slug = null) {
    await Cache.forget('age-groups')
    if (slug != null) {
      await Cache.forget(`age-groups:${slug}`)
    }
  }
}

module.exports = AgeGroupController
