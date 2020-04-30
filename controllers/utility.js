module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let allSubject = (request, response) => {

    //response.send('all subject');
          db.utility.allSubject((error, outgoingResult) => {
            response.send(outgoingResult)
        /*response.render('pokemon/index', { allPokemon });*/
      });
  };

  let test = (request, response) => {

    //response.send('test');
    let data = {};
    data.teacher_id = parseInt( request.cookies.userId );
          db.utility.checkEmptyResultEntry(data, (error, outgoingResult) => {
            response.send(outgoingResult)
        //response.render('pokemon/index', { allPokemon });
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

  };

}