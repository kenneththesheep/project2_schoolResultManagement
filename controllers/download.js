module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */



let initialCheck = (request, response) => {

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
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    initialCheck:initialCheck,
    conduct: conduct,
    allResult: allResult

  };

}