'use strict'

const CrudOperations = use('App/Constants/CrudOperations')
const Models = use('App/Constants/Models')

const DefaultSeedData = {
  ROLES: [
    { name: 'Administrator' },
    { name: 'Senior Staff' },
    { name: 'Manager' },
    { name: 'Coach' },
    { name: 'Parent' },
  ],

  PERMISSIONS: [
    ...Models.reduce((acc, curr) => {
      CrudOperations.forEach((op) => acc.push({ name: `${op} ${curr}` }))
      return acc
    }, []),
    { name: 'Manage User Roles' },
    { name: 'Manage User Permissions' },
    { name: 'Manage Role Permissions' },
  ],

  AGE_GROUPS: [...Array(11).keys()].map((i) => ({
    short_name: `U${i+7}`,
    name: `Under ${i+7}s`,
  })),

  TEAMS: [
    { age_group_id: 1, name: 'Under 7s' },
    { age_group_id: 2, name: 'Under 8s (Orange)' },
    { age_group_id: 2, name: 'Under 8s (Blue)' },
    { age_group_id: 3, name: 'Athletic' },
    { age_group_id: 3, name: 'U9 United' },
    { age_group_id: 4, name: 'Pumas' },
    { age_group_id: 4, name: 'Tigers' },
    { age_group_id: 5, name: 'Honey Badgers' },
    { age_group_id: 6, name: 'Under 12s' },
    { age_group_id: 7, name: 'Warriors' },
    { age_group_id: 7, name: 'Gladiators' },
    { age_group_id: 8, name: 'Hawks' },
    { age_group_id: 8, name: 'Eagles' },
    { age_group_id: 9, name: 'Under 15s' },
    { age_group_id: 9, name: 'U15 United' },
    { age_group_id: 10, name: 'Under 16s' },
    { age_group_id: 11, name: 'Under 17s' },
  ],
}

module.exports = DefaultSeedData
