const { Model } = require('objection');

class Projects extends Model {
  static get tableName() {
    return 'projects';
  }
}

module.exports = Projects;