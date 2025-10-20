const { Model } = require('objection')
const User = require('./User')

class SocialMedia extends Model {
    static get tableName() {
        return 'social_media'
    }

    static get relationMappings() {
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'social_media.user_id',
                    to: 'user.id',
                },
            },
        }
    }
}

module.exports = SocialMedia