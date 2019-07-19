
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments();
      table.text('project_name')
        .unique()
        .notNullable();
      table.text('description', 128)
        .notNullable();
      table.boolean('completed')
        .notNullable();
    })
};

exports.down = function(knex) {
  
};
