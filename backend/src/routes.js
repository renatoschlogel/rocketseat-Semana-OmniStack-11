const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentControler = require('./controllers/IncidentControler');
const ProfileControler = require('./controllers/ProfileController');

const routes = express();

routes.use(express.json());

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required(),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), OngController.create);

routes.get('/incidents', IncidentControler.index);
routes.post('/incidents', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    page: Joi.number()
  })
}),  IncidentControler.create);
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), IncidentControler.delete);
 
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    autorization: Joi.string().required()
  }).unknown()
}), ProfileControler.index);

module.exports = routes;
