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

  const conductControllerCallbacks = require('./controllers/conduct')(allModels);

  const resultsControllerCallbacks = require('./controllers/results')(allModels);



///////callbacks relating to login
  app.get('/pokemons', pokemonControllerCallbacks.index);
  app.get('/', loginControllerCallbacks.login);
  app.post('/',loginControllerCallbacks.process)
  app.get('/home/', loginControllerCallbacks.home);

  /////callbacks relating to form class
  app.get('/formclass/', formClassControllerCallbacks.formLand);
  app.get('/formclass/all', formClassControllerCallbacks.viewall);
  app.get('/formclass/student', formClassControllerCallbacks.redirect);
   app.get('/formclass/student/add', formClassControllerCallbacks.addFormStudent);
   app.post('/formclass/student', formClassControllerCallbacks.add);
  app.get('/formclass/student/:id', formClassControllerCallbacks.individual);
    app.get('/formclass/student/:id/edit', formClassControllerCallbacks.editForm);
  app.delete('/formclass/student/:id', formClassControllerCallbacks.delete)
    app.put('/formclass/student/:id', formClassControllerCallbacks.edit);

//////////calllbacks relating to conduct grading
    app.get('/conduct',conductControllerCallbacks.conductLand);
        app.get('/conduct/view',conductControllerCallbacks.conductView);
    app.get('/conduct/select',conductControllerCallbacks.conductSelect);
    app.post('/conduct/student', conductControllerCallbacks.studentProcess);
    app.post('/conduct/initialCheck', conductControllerCallbacks.initialCheck);
    app.get('/conduct/add',conductControllerCallbacks.addForm);
    app.post('/conduct/', conductControllerCallbacks.processForm);
    app.get('/conduct/:id/edit', conductControllerCallbacks.editSingle);
    app.put('/conduct/:id',conductControllerCallbacks.editSingleProcess);

//////////callbacks relating to result
    app.get('/results', resultsControllerCallbacks.resultHome);

  //app.get('/pokemons/:id', pokemons.getPokemon);
};