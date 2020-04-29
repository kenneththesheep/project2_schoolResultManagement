module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let resultHome = (request, response) => {
    //response.send('Welcome to result landing page');
    response.render('result/resultLanding');

  };

  let viewSubject = (request, response) => {
    //response.send('Welcome to view subject page');
    //response.render('result/resultLanding');

        let data = {};
        data.id = request.cookies['userId'];


        db.result.findStudents(data,(error, returningResult) => {
        //response.send(returningResult);
        response.render('result/viewSubject', returningResult);
      });
  };

  let addSubject = (request, response) => {
    //response.send('Welcome to add subject page');
    //response.render('result/resultLanding');

        let data = {};
        data.id = request.cookies['userId'];


        db.result.findStudents(data,(error, returningResult) => {
        //response.send(returningResult);
        response.render('result/addSubject', returningResult);
      });
  };

   let checkSubjectNotTaken = (request, response) => {
    //response.send('Welcome to add subject page');
    console.log(request.body);

    //response.render('result/resultLanding');

        let data = {};
        data.id = parseInt(request.body.student_id)


        db.result.checkSubjectNotTaken(data,(error, returningResult) => {
        response.send(returningResult);
        //response.render('result/addSubject', returningResult);
      });
  };
     let checkSubjectTaken = (request, response) => {
    //response.send('Welcome to add subject page');
    console.log(request.body);

    //response.render('result/resultLanding');

        let data = {};
        data.id = parseInt(request.body.student_id)


        db.result.checkSubjectTaken(data,(error, returningResult) => {
        response.send(returningResult);
        //response.render('result/addSubject', returningResult);
      });
  };



     let processAddSubject = (request, response) => {
    //response.send('Welcome to add subject page process');
    //console.log(request.body);

    //response.render('result/resultLanding');

        let data = {};
        data.id = parseInt(request.body.student_id)
        if(typeof request.body.subject_id === "string")
        {
            console.log("single object");
            data.subject_id =[request.body.subject_id]
        }
        else if (typeof request.body.subject_id === "object"){
            console.log("Array");
            data.subject_id = request.body.subject_id;
        }

        db.result.processAddSubject(data,(error, returningResult) => {
        //response.send(returningResult);
        response.redirect('/results/viewSubject');
        //response.render('result/addSubject', returningResult);
      });
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    resultHome: resultHome,
    viewSubject: viewSubject,
    addSubject: addSubject,
    checkSubjectNotTaken: checkSubjectNotTaken,
    checkSubjectTaken:checkSubjectTaken,
    processAddSubject:processAddSubject,
  };

}