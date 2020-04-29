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
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    resultHome: resultHome,
    addSubject: addSubject,
    checkSubjectNotTaken: checkSubjectNotTaken,
  };

}