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


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    allSubject: allSubject,

  };

}