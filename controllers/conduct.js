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

      });
  };


 let conductView = (request, response) => {
    //response.send("View Conduct");
    //console.log(request);
    let data = {};
    data. teacher_id = request.cookies.userId;

    console.log(data);
    //response.send(data);

        db.conduct.viewForm(data,(error, returningResult) => {
            //response.redirect('/conduct')
        //response.send(returningResult);
        response.render('conduct/viewConduct.jsx', returningResult);
        //console.log(returningResult);
        //response.send(returningResult)
        //response.render('conduct/addConductForm', returningResult);
      });
  };

let editSingle = (request, response) => {
    //response.send("Edit single");
    console.log(request.params);
    let data = {};
    data.conductId = parseInt (request.params.id);
    /*data. teacher_id = request.cookies.userId;

    console.log(data);*/
    //response.send(data);

        db.conduct.editSingle(data,(error, returningResult) => {
            //response.redirect('/conduct')
        //response.send(returningResult);
        response.render('conduct/editSingle.jsx', returningResult);

      });
  };

let editSingleProcess = (request, response) => {

    console.log(request.params);
    let data = {};
    data = request.body;
    data.conductId = parseInt (request.params.id);
        //response.send(data);
    /*data. teacher_id = request.cookies.userId;

    console.log(data);*/
    //response.send(data);

        db.conduct.editSingleProcess(data,(error, returningResult) => {
            response.redirect('/conduct/view')

      });
  };

let conductSelect = (request, response) => {
    let teacher_id = request.cookies.userId;
    //response.send("Hilo World");
    let data = {};

    data.teacherId = parseInt (teacher_id);
        //response.send(data);


    console.log(data);
    //response.send(data);

        db.conduct.conductSelect(data,(error, returningResult) => {
            //response.send(returningResult);
            response.render('conduct/selectStudent', returningResult)
            //response.redirect('/conduct/view')

      });
  };


let studentProcess = (request, response) => {
    //let teacher_id = request.cookies.userId;
    //response.send(request.body);
    let data = {};
    data.student_id = parseInt(request.body.student);

        db.conduct.studentProcess(data,(error, returningResult) => {
            //response.send(returningResult);
            response.redirect(returningResult);
            //response.render('conduct/selectStudent', returningResult)
            //response.redirect('/conduct/view')

      });
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
    editSingle: editSingle,
    editSingleProcess: editSingleProcess,
    conductSelect: conductSelect,
    studentProcess: studentProcess

  };

}