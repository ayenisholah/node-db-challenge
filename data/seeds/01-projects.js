
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {project_name: 'Build a Web API', description: 'This week we’ll learn how to build web services based on the REST (REpresentational State Transfer) architectural style.', completed: true},
        {project_name: 'Adding Data Persistence', description: 'This week we’ll learn about databases, what they are and how to use them from our Web APIs.', completed: true},
        {project_name: 'Authentication and Testing', description: 'Authentication is one of the largest concepts that we get to tackle in such a short period of time. Have you ever wondered what happens when you “log in” to a website? Well this week we get a chance to learn all about that.', completed: false}
      ]);
    });
};
