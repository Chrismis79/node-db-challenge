
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('proj_name', 128)
            .unique()
            .notNullable();
        tbl.text('proj_description', 300);
        tbl.boolean('completed')
            .defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('resource_name')
            .unique()
            .notNullable();
        tbl.text('description', 300)
    })
    .createTable('project_resources', tbl => {
        tbl.primary(['project_id', 'resource_id']);
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects');
        tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources');
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('task_description')
          .notNullable()
          .unique();
        tbl.text('notes', 300);
        tbl.boolean('completed')
            .defaultTo(false);
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
  };

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
