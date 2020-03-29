# rocketseat-Semana-OmniStack-11

 * Adicionando express                    : npm install express
 * Adicionado nodemon                     : npm install nodemon -D
 * Adicionando knex                       : npm install knex
   - será uilizado o banco de dados SQLlite com knex;
 * Instalar o driver do SQLLite para knex : npm install sqlite3
  - Se for utilizar outro banco SQL, é instalar o driver do mesmo;
 * Iniciar arquivo de configuração knex   : npx knex init;
 * Criar arquivo de migration             : npx knex migrate:make create_onsgs
 * executar migrations                    : npx knex migrate:latest