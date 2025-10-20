const { Model } = require('objection')
const User = require('./User')

class Reference extends Model {
    static get tableName() {
        return 'reference'
    }

    static get relationMappings() {
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'reference.user_id',
                    to: 'user.id',
                },  
            },
        }
    }
}