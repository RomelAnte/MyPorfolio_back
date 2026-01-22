const { Model } = require('objection');

class Skill_categories extends Model {
  static get tableName() {
    return 'skill_categories';
  }
}

module.exports = Skill_categories;