const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(getConfig());

function getConfig(){
  if (process.env.NODE_ENV === 'test'){
    return configuration.test;
  }

  return configuration.development;
}

module.exports = connection;