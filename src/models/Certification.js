const { Model } = require('objection')
const User = require('./User')

class Certification extends Model {
    static get tableName() {
        return 'certification'
    }

    static get relationMappings() {
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'certification.user_id',
                    to: 'user.id',
                },
            },
        }
    }
}

module.exports = Certification