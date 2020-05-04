module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let allSubject = (request, response) => {
    var loginSession = request.cookies['loginSession'];
        if(loginSession === undefined){
                    response.redirect('/');
                    return;
                }
    //response.send('all subject');
          db.utility.allSubject((error, outgoingResult) => {
            response.send(outgoingResult)
        /*response.render('pokemon/index', { allPokemon });*/
      });
  };

  let test = (request, response) => {
    var loginSession = request.cookies['loginSession'];
        if(loginSession === undefined){
                    response.redirect('/');
                    return;
                }
    //response.send('test');
    let data = {};
    data.teacher_id = parseInt( request.cookies.userId );
          db.utility.checkEmptyResultEntry(data, (error, outgoingResult) => {
            response.send(outgoingResult)
        //response.render('pokemon/index', { allPokemon });
      });
  };

  let students = (request, response) => {

    var loginSession = request.cookies['loginSession'];
        if(loginSession === undefined){
                    response.redirect('/');
                    return;
                }
        let data = {};
        data.id = request.cookies['userId'];


        db.formClass.optionClassForm(data,(error, returningResult) => {
        response.send(returningResult);
        //response.render('formclass/formClassViewAll', returningResult);
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    allSubject: allSubject,
    test:test,
    students: students,

  };

}