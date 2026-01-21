const { Model } = require('objection');

class Section extends Model {
  static get tableName() {
    return 'sections';
  } 
}

module.exports = Section;