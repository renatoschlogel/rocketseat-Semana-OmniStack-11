const express = require('express');

const routes = express();

routes.use(express.json());

routes.get('/users/:id', (request, response) => {
  return response.json({semana: "11.0"});
});

module.exports = routes;
