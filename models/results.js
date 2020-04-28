/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let login = (userlogin, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(userlogin);
    let query = 'SELECT * FROM teachers WHERE loginname= ($1)';
    //let query = 'SELECT * FROM teachers';
    let loginname = [userlogin.loginname];
    //loginname= [ 'bobobobob'];
    let outgoingStatus = {};
    dbPoolInstance.query(query, loginname, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){

            console.log();
            if( userlogin. password === queryResult.rows[0].password)
            {
                outgoingStatus.login = true;
                outgoingStatus.teacherId= parseInt(queryResult.rows[0].id);
                outgoingStatus.teacherName=queryResult.rows[0].name;
                callback(null, outgoingStatus);
            }else{
            outgoingStatus.login = false;
            outgoingStatus.message = "Wrong password";
          callback(null, outgoingStatus);

            }



        }else{
            outgoingStatus.login = false;
            outgoingStatus.message = "Wrong user name";
          callback(null, outgoingStatus);

        }
      }
    });
  };

  return {
    login:login,
  };
};