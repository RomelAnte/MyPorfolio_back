const { Model } = require('objection');
const User = require('./User');

class Education extends Model {
    static get tableName() {
        return 'education';
    }

    static get relationMappings() {
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'education.user_id',
                    to: 'user.id',
                },
            },
        };
    }
}

module.exports = Education;