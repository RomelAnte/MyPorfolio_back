const { Model } = require('objection');

class Profile extends Model {
  static get tableName() {
    return 'profiles';
  }
}

module.exports = Profile;