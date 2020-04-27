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
    home: homeControllerCallback,
  };

}