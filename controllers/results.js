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

        console.log(request.query);
    //console.log(request.body);

    //response.render('result/resultLanding');

        let data = {};
       data.subject_id=parseInt(request.query.subject_id);
        data.teacher_id=parseInt(request.cookies.userId);

        console.log(data);
       db.result.viewBySubject(data,(error, returningResult) => {
        let outData={};
        outData.activeStudents = returningResult
        //response.send(outData);
        //response.redirect('/results/viewSubject');
        response.render('result/resultEdit', outData);
      });
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
        if(data.student_id.length>2){

                for(let count =0; count < data.SA1.length; count++)
                {

                    console.log(data.student_id[count]);
                    data.student_id[count]=parseInt (data.student_id[count]);
                    data.SA1[count] = parseInt(data.SA1[count]);
                    data.SA2[count] = parseInt(data.SA2[count]);
                }
            }
            else{
            for( count =0; count < data.SA1.length; count++)
                {


                    data.SA1[count] = parseInt(data.SA1[count]);
                    data.SA2[count] = parseInt(data.SA2[count]);
                }
                data.student_id[0]=parseInt (data.student_id[0]);
            }
        console.log(data);
       db.result.processMarkEntry(data,(error, returningResult) => {
        //response.send(returningResult);
        response.redirect('/results/');
        //response.render('result/resultEntry', returningResult);
      });
  };


         let keyEditResultProcess = (request, response) => {
    //response.send(request.body);
    //response.send(request.body);
    console.log(request.body);


        let data = {};
        data.SA1 = [];
        data.SA2 = [];
        data.overall = [];
        data.result_id = [];
        for(let count = 0; count < request.body.result_id.length; count++)
        {
            data.SA1.push( parseInt ( request.body.SA1[count] ) );
            data.SA2.push( parseInt ( request.body.SA2[count] ) );
            data.overall.push( 0.45 * parseInt ( request.body.SA1[count] ) + 0.55 * parseInt ( request.body.SA2[count] ) )
            data.result_id.push( parseInt ( ( request.body.result_id[count] ) ) );
        }

        console.log(data);
       db.result.processEdit(data,(error, returningResult) => {
        //response.send(returningResult);
        response.redirect('/results/');
        //response.render('result/resultEntry', returningResult);
      });
  };

         let viewAll = (request, response) => {
    //response.send('Welcome to viewAll');


    //console.log(request.body);

    //response.render('result/resultLanding');

        let data = {};

        data.teacher_id=parseInt(request.cookies.userId);

        console.log(data);
       db.result.viewAll(data,(error, returningResult) => {
        let returnData = {};
        returnData.class = returningResult;
        //response.send(returningResult);
        //response.redirect('/results/viewResult');
        response.render('result/viewResult', returnData);
      });
  };

        let viewBySubject = (request, response) => {
    //response.send('Welcome to viewAll');
        console.log("$#@#$#@#$@#$@$@$ QUERY $#!$@$@$@#");
        console.log(typeof  request.query.subject_id);
    //console.log(request.body/);

    //response.render('result/resultLanding');

        let data = {};

        data.teacher_id=parseInt(request.cookies.userId);
        data.subject_id = parseInt (request.query.subject_id);
        console.log(data);
       db.result.viewBySubject(data,(error, returningResult) => {
        let returnData = {};
        returnData.class = returningResult;
        //response.send(returningResult);
        //response.redirect('/results/viewResult');
        response.render('result/viewBySubject', returnData);
      });
  };


        let viewByStudent = (request, response) => {
    //response.send('Welcome to viewAll');
        console.log("$#@#$#@#$@#$@$@$ QUERY $#!$@$@$@#");
        console.log(request.query);
    //console.log(request.body/);

    //response.render('result/resultLanding');

        let data = {};

        data.teacher_id=parseInt(request.cookies.userId);
        data.student_id = parseInt (request.query.student_id);
        console.log(data);
       db.result.viewByStudent(data,(error, returningResult) => {
        let returnData = {};
        returnData.class = returningResult;
        //response.send(returningResult);
        //response.redirect('/results/viewResult');
        response.render('result/viewByStudent', returnData);
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    resultHome : resultHome,
    viewSubject : viewSubject,
    addSubject : addSubject,
    checkSubjectNotTaken : checkSubjectNotTaken,
    checkSubjectTaken : checkSubjectTaken,
    processAddSubject : processAddSubject,
    deleteSubject : deleteSubject,
    processRemoveSubject : processRemoveSubject,
    keyResultForm : keyResultForm,
    editResultForm : editResultForm,
    keyResultProcess : keyResultProcess,
    viewAll : viewAll,
    viewBySubject : viewBySubject,
    viewByStudent : viewByStudent,
    keyEditResultProcess: keyEditResultProcess,
    //keyResultProcess: keyResultProcess,
  };

}