module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let loginControllerCallback = (request, response) => {

    response.render('home/login');

  };
  let processLogInControllerCallback = (request, response) => {
    //response.send(request.body);
    let userLoginDetail= request.body;
      db.login.login(userLoginDetail,(error, returningResult) => {
        if ( returningResult.login){
                var sha256 = require('js-sha256');
                const secretMessage = 'I Love H20'
                var userId = request.cookies['userId']
                var userName = request.cookies['userName'];
                var loginSession = request.cookies['loginSession'];
                if(userId === undefined){
                    userId = returningResult.teacherId;
                    userName = returningResult.teacherName;
                    loginSession = sha256 (userId + 'logged_in' + secretMessage );
                }
                response.cookie('loginSession', loginSession)
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