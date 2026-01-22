const { Model } = require('objection');

class Experiences extends Model {
  static get tableName() {
    return 'experiences';
  }
}

module.exports = Experiences;