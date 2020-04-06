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
 * definir que pode acessar a api         : npm install cors
 * Biblioteca para fazer validações       : npm install celebrate
 * Framework de testes                    : npm install jest
 * P/ trabalhar com variaveis de ambiente : npm install cross-env; 