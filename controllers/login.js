module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let loginControllerCallback = (request, response) => {

    response.render('home/index');

  };
  let processLogInControllerCallback = (request, response) => {
    //response.send(request.body);
    let userLoginDetail= request.body;
      db.login.login(userLoginDetail,(error, returningResult) => {
        if ( returningResult.login){

                var userId = request.cookies['userId']
                var userName = request.cookies['userName'];
                if(userId === undefined){
                    userId = returningResult.teacherId;
                    userName = returningResult.teacherName;
                }
                response.cookie('userId', userId);
                response.cookie('userName', userName);
                response.send(returningResult);
                return;
        }
        else{
                //response.send(returningResult.message);
                let data = {};
                data.errorMessage =returningResult.message;
                response.render('home/error', data);
                return;
        }
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    login: loginControllerCallback,
    process: processLogInControllerCallback,
  };

}