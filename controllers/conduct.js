module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let conductLandClassControllerCallback = (request, response) => {
    //response.send('Welcome to conduct landing page');
    response.render('conduct/conductLanding');
/*       var loginSession = request.cookies['loginSession'];
        if(loginSession === undefined){
                    response.redirect('/');
                    return;
                }

        let data = {};
        data.id = request.cookies['userId'];


        db.formClass.optionClassForm(data,(error, returningResult) => {
        //response.send(returningResult);
        response.render('formclass/formClassLanding', returningResult);
      });*/
  };

let initialCheck = (request, response) => {


    console.log(request.body);
    let data = {};
    data.teacher_id = request.body.teacher_id;
    console.log(data);

        db.conduct.initialCheckConduct(data,(error, returningResult) => {
        //response.send(returningResult);
        //console.log(returningResult);
        response.send(returningResult)
        //response.render('formclass/formClassLanding', returningResult);
      });
  };

let addForm = (request, response) => {

    let data = {};
    data. teacher_id = request.cookies.userId;

    console.log (data);


        db.conduct.addForm(data,(error, returningResult) => {
        //response.send(returningResult);
        //console.log(returningResult);
        //response.send(returningResult)
        response.render('conduct/addConductForm', returningResult);
      });
  };

  let processForm = (request, response) => {
    //response.send(request.body);
    //console.log(request);
    let data = {};
    data.classIndex = parseInt(request.body.formClassId);
    data.conductGradeArray= request.body.conductGrade;
    data.remarksArray = request.body.remarks;
    console.log(data);
    //response.send(data);

        db.conduct.processForm(data,(error, returningResult) => {
            response.redirect('/conduct')
        //response.send(returningResult);
        //console.log(returningResult);
        //response.send(returningResult)
        //response.render('conduct/addConductForm', returningResult);
      });
  };


 let conductView = (request, response) => {
    response.send("View Conduct");
    //console.log(request);
    /*let data = {};
    data.classIndex = parseInt(request.body.formClassId);
    data.conductGradeArray= request.body.conductGrade;
    data.remarksArray = request.body.remarks;
    console.log(data);
    //response.send(data);

        db.conduct.processForm(data,(error, returningResult) => {
            response.redirect('/conduct')
        //response.send(returningResult);
        //console.log(returningResult);
        //response.send(returningResult)
        //response.render('conduct/addConductForm', returningResult);
      });*/
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    conductLand: conductLandClassControllerCallback,
    initialCheck: initialCheck,
    addForm: addForm,
    processForm: processForm,
    conductView: conductView,

  };

}