const { Model } = require('objection')
const User = require('./User')

class Project extends Model {
    static get tableName() {
        return 'project'
    }

    static get relationMappings() {
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'project.user_id',
                    to: 'user.id',
                },
            },
        }
    }
}

module.exports = Project