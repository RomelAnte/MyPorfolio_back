const { Model } = require('objection');
const Projects = require('./Projects');

class Project_technologies extends Model {
  static get tableName() {
    return 'project_technologies';
  }

  static get relationMappings() {
    return {
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: Projects,
        join: {
            from: 'project_technologies.project_id',
            to: 'projects.id',  
        },
      },
    };
  }
}

module.exports = Project_technologies;