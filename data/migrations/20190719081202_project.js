
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments();
      table.text('project_name', 50)
        .unique()
        .notNullable();
      table.text('description', 128)
        .notNullable();
      table.boolean('completed')
        .notNullable();
    })

    .createTable('actions', table => {
      table.increments();
      table.text('action_name', 50)
        .unique()
        .notNullable();
      table.text('notes', 128)
        .notNullable();
      table.boolean('completed')
        .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('actions')
};
