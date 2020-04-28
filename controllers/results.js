module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let resultHome = (request, response) => {
    //response.send('Welcome to result landing page');
    response.render('result/resultLanding');
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


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {



    resultHome: resultHome,
  };

}