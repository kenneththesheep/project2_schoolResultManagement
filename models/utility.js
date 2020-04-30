/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let allSubject = (callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

    let query = 'SELECT * FROM subject';
    //let query = 'SELECT * FROM teachers';

    //loginname= [ 'bobobobob'];
    let outgoingStatus = {};
    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        callback(null, queryResult.rows)
      }
    });
  };


 let checkEmptyResultEntry = (user, callback) => {


    let query = 'SELECT class_id FROM teacher_class WHERE teacher_id = ($1) ';
    let classTaught = [user.teacher_id]

    let outgoingStatus = {};
    dbPoolInstance.query(query, classTaught, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        class_id = [queryResult.rows[0].class_id];
        //class_id = [1];
        console.log(class_id);
        let checkResultOfClassquery = 'SELECT * from student_subject_result_class INNER JOIN subject ON (subject.id = student_subject_result_class.subject_id) WHERE class_id = ($1)'
            dbPoolInstance.query(checkResultOfClassquery, class_id, (errorClass, queryClassResult) => {
      if( errorClass ){

        // invoke callback function with results after query has executed
        callback(errorClass, null);

      }else{

        // invoke callback function with results after query has executed

        callback(null, queryClassResult.rows)
      }
    });
      }
    });
  };
  return {
    allSubject:allSubject,
    checkEmptyResultEntry:checkEmptyResultEntry,
  };
};