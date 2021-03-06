module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */



let initialCheck = (request, response) => {
    var loginSession = request.cookies['loginSession'];
        if(loginSession === undefined){
                    response.redirect('/');
                    return;
                }
    //response.send("download")
    console.log(request.body);
    let data = {};
   data.teacher_id = parseInt(request.body.teacherId);
    console.log(data);

        db.download.download(data,(error, returningResult) => {
        //response.send(returningResult);
        //console.log(returningResult);
        response.send(returningResult)
        //response.render('formclass/formClassLanding', returningResult);
      });
  };

let conduct = (request, response) => {
    var loginSession = request.cookies['loginSession'];
        if(loginSession === undefined){
                    response.redirect('/');
                    return;
                }
    //response.send("download Conduct")
    console.log(request.body);
    let data = {};
   data.teacher_id = parseInt(request.body.teacherId);
    console.log(data);

        db.download.downloadConduct(data,(error, returningResult) => {
        //response.send(returningResult);
        //console.log(returningResult);
        response.send(returningResult)
        //response.render('formclass/formClassLanding', returningResult);
      });
  };

let allResult = (request, response) => {
    var loginSession = request.cookies['loginSession'];
        if(loginSession === undefined){
                    response.redirect('/');
                    return;
                }
    //response.send("download result")
    //console.log(request.body);
    let data = {};
   data.teacher_id = parseInt(request.body.teacherId);
   console.log(data);

        db.download.downloadAllResult(data,(error, returningResult) => {
        //response.send(returningResult);
        //console.log(returningResult);
        response.send(returningResult)
        //response.render('formclass/formClassLanding', returningResult);
      });
  };

  let resultBySubject = (request, response) => {
    var loginSession = request.cookies['loginSession'];
        if(loginSession === undefined){
                    response.redirect('/');
                    return;
                }
    //response.send("download result by subject")
    //console.log(request.body);
    let data = {};
   data.teacher_id = parseInt(request.body.teacherId);
   data.subject_id = parseInt(request.body.subjectId);
   console.log(data);

        db.download.downloadResultBySubject(data,(error, returningResult) => {
        //response.send(returningResult);
        //console.log(returningResult);
        response.send(returningResult)
        //response.render('formclass/formClassLanding', returningResult);
      });
  };



    let studentReport = (request, response) => {
    var loginSession = request.cookies['loginSession'];
        if(loginSession === undefined){
                    response.redirect('/');
                    return;
                }
    //response.send("download individual report")
    console.log("jkfhdakhfkhfkjshfksahfkjhafkhafkhakfhdskjfhaskhfkjashf");
    console.log(request.body);
    let data = {};
    data= request.body;
   console.log(data);

        db.download.individualStudentReport(data,(error, returningResult) => {
        //response.send(returningResult);
        //console.log(returningResult);
        response.send(returningResult)
        //response.render('formclass/formClassLanding', returningResult);
      });
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    initialCheck:initialCheck,
    conduct: conduct,
    allResult: allResult,
    resultBySubject: resultBySubject,
    studentReport: studentReport

  };

}