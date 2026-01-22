const { Model } = require('objection');
const Skills = require('./Skills');

class Skill_levels extends Model {
  static get tableName() {
    return 'skill_levels';
  }

  static get relationMappings() {
    return {
      skill: {
        relation: Model.BelongsToOneRelation,
        modelClass: Skills,
        join: {
            from: 'skill_levels.skill_id',
            to: 'skills.id',    
        },
      },
    };
  }
}

module.exports = Skill_levels;