const { Model } = require('objection');
const Skill_categories = require('./Skill_categories');

class Skills extends Model {
  static get tableName() {
    return 'skills';
  } 

  static get relationMappings() {

    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Skill_categories,
        join: {
          from: 'skills.category_id',
          to: 'skill_categories.id',
        },
      },
    };
  }
}

module.exports = Skills;