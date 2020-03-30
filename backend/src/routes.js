const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentControler = require('./controllers/IncidentControler');
const ProfileControler = require('./controllers/ProfileController');

const routes = express();

routes.use(express.json());

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentControler.index);
routes.post('/incidents', IncidentControler.create);
routes.delete('/incidents/:id', IncidentControler.delete);

routes.get('/profile', ProfileControler.index);

module.exports = routes;
