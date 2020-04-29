/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */



const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{
  configs = {
    user: 'kenneththesheep',
    host: '127.0.0.1',
    database: 'result_management',
    port: 5432
  };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});



/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */


const allPokemonModelsFunction = require('./models/pokemon');

const pokemonModelsObject = allPokemonModelsFunction( pool );


const loginModelsFunction = require('./models/login');

const loginModelsObject = loginModelsFunction( pool );

const formClassModelsFunction = require('./models/formclass');

const formClassModelsObject = formClassModelsFunction( pool );

const conductModelsFunction = require('./models/conduct');

const conductModelsObject = conductModelsFunction( pool );


const resultsModelsFunction = require('./models/results');

const resultModelsObject = resultsModelsFunction( pool );


const utilityModelsFunction = require('./models/utility');

const utilityModelsObject = utilityModelsFunction( pool );
/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */


module.exports = {
  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  // get a reference to end the connection pool at server end
  pool:pool,

  /*
   * ADD APP MODELS HERE
   */

  // users: userModelsObject,
  pokemon: pokemonModelsObject,
  login:loginModelsObject,
  formClass: formClassModelsObject,
  conduct: conductModelsObject,
  result: resultModelsObject,
  utility: utilityModelsObject,
};