
exports.seed = function(knex) {
  return knex('actions').truncate()
    .then(function () {
      return knex('actions').insert([
        {action_name: 'Learn Node.js and Express', notes: 'what is node.js, what can it do? what can’t it do? what is Express? why use it? relationship between Express and node.js.', completed: true, project_id: 1},
        {action_name: 'Learn Server-Side Routing with Express', notes: 'use the routing feature of express to build several endpoints. cover different ways to pass data to a Web API. introduce REST as a way to guide the architecture of our web using Express Routers to organize our code.', completed: true, project_id: 1},
        {action_name: 'Learn Express Middleware', notes: 'the what, why and how of Middleware. different types of Express Middleware. how to create Custom Middleware. error handling middleware.', completed: true, project_id: 1},
        {action_name: 'Learn Web Deployment and Best Practices', notes: 'extract configuration values into environment variables. deploy an API to Heroku.', completed: true, project_id: 1},
      ]);
    });
};
