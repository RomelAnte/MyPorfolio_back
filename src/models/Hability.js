const { Model } = require('objection');
const User = require('./User');

class Experience extends Model {
    static get tableName() {
        return 'experience';
    }

    static get relationMappings() {
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'experience.user_id',
                    to: 'user.id',
                },
            },
        };
    }
}

module.exports = Experience;
