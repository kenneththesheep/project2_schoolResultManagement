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
    home: homeControllerCallback,
  };

}