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

  let deleteSubject = (request, response) => {
    //response.send('Welcome to delete subject page');
    //response.render('result/resultLanding');

        let data = {};
        data.id = request.cookies['userId'];


        db.result.findStudents(data,(error, returningResult) => {
        //response.send(returningResult);
        response.render('result/deleteSubject', returningResult);
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

       let processRemoveSubject = (request, response) => {
    //response.send('Welcome to remove subject page process');
    console.log(request.body);

    //response.render('result/resultLanding');

        let data = {};
        data.id = parseInt(request.body.student_id)
            data.subject_id = parseInt(request.body.subject_id);

        console.log(data);
       db.result.processRemoveSubject(data,(error, returningResult) => {
        //response.send(returningResult);
        response.redirect('/results/viewSubject');
        //response.render('result/addSubject', returningResult);
      });
  };

         let keyResultForm = (request, response) => {
    //response.send('Welcome to Key Result');
    //response.send(request.body);
    console.log(request.query);

    //console.log(request.body);

    //response.render('result/resultLanding');

        let data = {};
        data.subject_id=parseInt(request.query.subject_id);
        data.teacher_id=parseInt(request.cookies.userId);

        console.log(data);
       db.result.viewStudentFromFormClassWithSubject(data,(error, returningResult) => {
        //response.send(returningResult);
        //response.redirect('/results/viewSubject');
        response.render('result/resultEntry', returningResult);
      });
  };


           let editResultForm = (request, response) => {
    response.send('Welcome to Edit Result');
        console.log(request.query);
    //console.log(request.body);

    //response.render('result/resultLanding');

 /*       let data = {};
        data.id = parseInt(request.body.student_id)
            data.subject_id = parseInt(request.body.subject_id);

        console.log(data);*/
/*       db.result.processRemoveSubject(data,(error, returningResult) => {
        //response.send(returningResult);
        response.redirect('/results/viewSubject');
        //response.render('result/addSubject', returningResult);
      });*/
  };



         let keyResultProcess = (request, response) => {
    //response.send(request.body);
    //response.send(request.body);
    console.log(request.body);


        let data = {};
        data.subject_id = parseInt(request.body.subject_id);
        data.class_id = parseInt(request.body.class_id);
        const uniqueSet = new Set(request.body.student_id);
        data.student_id = [... uniqueSet];
        data.SA1 = request.body.SA1;

        data.SA2 = request.body.SA2
        for(let count =0; count < data.SA1.length; count++)
        {
            data.student_id[count]=parseInt (data.student_id[count]);
            data.SA1[count] = parseInt(data.SA1[count]);
            data.SA2[count] = parseInt(data.SA2[count]);
        }
        console.log(data);
       db.result.processMarkEntry(data,(error, returningResult) => {
        //response.send(returningResult);
        response.redirect('/results/');
        //response.render('result/resultEntry', returningResult);
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
    deleteSubject: deleteSubject,
    processRemoveSubject: processRemoveSubject,
    keyResultForm:keyResultForm,
    editResultForm:editResultForm,
    keyResultProcess : keyResultProcess,
    //keyResultProcess: keyResultProcess,
  };

}