const { Model } = require('objection');

class Skill_levels extends Model {
  static get tableName() {
    return 'skill_levels';
  }
}

module.exports = Skill_levels;