module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let formLandClassControllerCallback = (request, response) => {
    //response.send('Welcome');
       var loginSession = request.cookies['loginSession'];
        if(loginSession === undefined){
                    response.redirect('/');
                    return;
                }

        let data = {};
        data.id = request.cookies['userId'];


        db.formClass.optionClassForm(data,(error, returningResult) => {
        //response.send(returningResult);
        response.render('formclass/formClassLanding', returningResult);
      });


  };

  let viewAllFormClassControllerCallback = (request, response) => {
    //response.send('Welcome to all');
       var loginSession = request.cookies['loginSession'];
        if(loginSession === undefined){
                    response.redirect('/');
                    return;
                }

        let data = {};
        data.id = request.cookies['userId'];


        db.formClass.optionClassForm(data,(error, returningResult) => {
        //response.send(returningResult);
        response.render('formclass/formClassViewAll', returningResult);
      });
    //response.render('home/login');

  };

let redirectFormClassControllerCallback = (request, response) => {
    //response.send("Hello");
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")

    function isEmpty(obj) {
    return Object.keys(obj).length === 0;
    }
    if(isEmpty(request.query))
    {
        response.redirect('/formClass/');
        return;
    }
    const redirect_url= '/formclass/student/' + request.query.student_id;
    //response.send(request.query);
    response.redirect(redirect_url);


  };

let individualFormClassControllerCallback = (request, response) => {
    console.log("Something really really happen");
    //response.send(request.params);

        let data = {};
        data.id = request.params.id;


        db.formClass.viewStudent(data,(error, returningResult) => {
        //response.send(returningResult);
        response.render('formclass/individual_student', returningResult);
      });

  };

let addFormStudentFormClassControllerCallback = (request, response) => {
    console.log("I can ADD");
    //response.send(request.params);
    //response.send("I can ADD");
    response.render("formclass/addIndividualStudent");


 /*       db.formClass.viewStudent(data,(error, returningResult) => {
        //response.send(returningResult);
        response.render('formclass/individual_student', returningResult);
      });*/

  };


  let addStudentClassControllerCallback = (request, response) => {
    console.log("I can process process ADD");
    let teachers_id= request.cookies.userId;
    //response.send(request.params);
    //response.send(request.body);
    //response.render("formclass/addIndividualStudent");
    data = request.body;
    data.teachers_id= teachers_id;
       db.formClass.addStudent(data,(error, returningResult) => {
        const url = '/formclass/student/'+returningResult.student_Id;
        //response.send(returningResult);
        response.redirect(url);
        //response.render('formclass/individual_student', returningResult);
      });

  };

  let homeControllerCallback = (request, response) => {
    var loginSession = request.cookies['loginSession'];
        if(loginSession === undefined){
                    response.redirect('/');
                    return;
                }
    let data = {};
    data.username = request.cookies['userName'];
    //response.send('home Sweet Home')
    response.render('home/home', data);

  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    formLand: formLandClassControllerCallback,
    viewall: viewAllFormClassControllerCallback,
    redirect: redirectFormClassControllerCallback,
    individual: individualFormClassControllerCallback,
    addFormStudent: addFormStudentFormClassControllerCallback,
    add:addStudentClassControllerCallback,
    home: homeControllerCallback,
  };

}