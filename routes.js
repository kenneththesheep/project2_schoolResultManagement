module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);

   const loginControllerCallbacks = require('./controllers/login')(allModels);

      const formClassControllerCallbacks = require('./controllers/formclass')(allModels);

  app.get('/pokemons', pokemonControllerCallbacks.index);
  app.get('/', loginControllerCallbacks.login);
  app.post('/',loginControllerCallbacks.process)
  app.get('/home/', loginControllerCallbacks.home);
  app.get('/formclass/', formClassControllerCallbacks.formLand);
  app.get('/formclass/all', formClassControllerCallbacks.viewall);
  app.get('/formclass/student', formClassControllerCallbacks.redirect);
   app.get('/formclass/student/add', formClassControllerCallbacks.addFormStudent);
   app.post('/formclass/student', formClassControllerCallbacks.add);
  app.get('/formclass/student/:id', formClassControllerCallbacks.individual);

  //app.get('/pokemons/:id', pokemons.getPokemon);
};