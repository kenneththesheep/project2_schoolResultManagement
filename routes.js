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

 const utilityControllerCallbacks = require('./controllers/utility')(allModels);

const downloadControllerCallbacks = require('./controllers/download')(allModels);

////////////
app.get('/utility',utilityControllerCallbacks.allSubject);
app.get('/utility/test',utilityControllerCallbacks.test);
app.get('/utility/students',utilityControllerCallbacks.students);



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
    app.get('/conduct/addSingle/:student_id', conductControllerCallbacks.singleStudentConduct);
    app.post('/conduct/single', conductControllerCallbacks.processSingleStudentConduct);

//////////callbacks relating to result
    app.get('/results', resultsControllerCallbacks.resultHome);
    app.get('/results/viewSubject', resultsControllerCallbacks.viewSubject);
    app.get('/results/addSubject', resultsControllerCallbacks.addSubject);
    app.get('/results/removeSubject', resultsControllerCallbacks.deleteSubject);
    app.post('/results/checkSubjectTaken', resultsControllerCallbacks.checkSubjectTaken);
    app.post('/results/checkSubjectNotTaken', resultsControllerCallbacks.checkSubjectNotTaken);

    app.post('/results/subject/add', resultsControllerCallbacks.processAddSubject);
    app.post('/results/subject/delete', resultsControllerCallbacks.processRemoveSubject);
    app.get("/results/add",resultsControllerCallbacks.keyResultForm);
    app.post("/results/add",resultsControllerCallbacks.keyResultProcess);
        app.get("/results/edit",resultsControllerCallbacks.editResultForm);
         app.post("/results/edit",resultsControllerCallbacks.keyEditResultProcess);
    app.get("/results/view/all",resultsControllerCallbacks.viewAll);
    app.get("/results/view/subject",resultsControllerCallbacks.viewBySubject);
    app.get("/results/view/student",resultsControllerCallbacks.viewByStudent);



    app.post("/download/formclass", downloadControllerCallbacks.initialCheck);
    app.post("/download/conduct", downloadControllerCallbacks.conduct);
        app.post("/download/allResult", downloadControllerCallbacks.allResult);

  //app.get('/pokemons/:id', pokemons.getPokemon);
};