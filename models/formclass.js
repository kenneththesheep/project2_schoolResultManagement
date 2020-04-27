/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
  let optionClassForm = (userlogin, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(userlogin);
    let query = 'SELECT classname, class_id FROM class INNER JOIN teacher_class ON (teacher_class.class_id = class.id) WHERE teacher_id= ($1)';
    //let query = 'SELECT * FROM teachers';
    let id = [parseInt(userlogin.id)];
    console.log (id);
    //loginname= [ 'bobobobob'];
    let outgoinginfo = {};
    dbPoolInstance.query(query, id, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed
                console.log ("Something");
                outgoinginfo.class = queryResult.rows;
                    let studentQuery = 'SELECT * FROM students INNER JOIN student_class ON (student_class.student_id = students.id) WHERE class_id= ($1)';
                    //let query = 'SELECT * FROM teachers';
                    let class_id = [parseInt(outgoinginfo.class[0].class_id)];
                    console.log (class_id);
                    //loginname= [ 'bobobobob'];

                    dbPoolInstance.query(studentQuery, class_id, (studentError, queryStudentResult) => {
                      if( studentError ){

                        // invoke callback function with results after query has executed
                        callback(studentError, null);

                      }else{

                        // invoke callback function with results after query has executed
                                console.log ("Something did happen");
                                outgoinginfo.students = queryStudentResult.rows;
                                callback(null, outgoinginfo);




                        }
                    });




        }
    });
  };




  let viewStudent = (id, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

    let query = 'SELECT * FROM students WHERE id= ($1)';
    //let query = 'SELECT * FROM teachers';
    let student_id = [id.id];
    //loginname= [ 'bobobobob'];
    let outgoingStatus = {};
    dbPoolInstance.query(query, student_id, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed
                console.log(queryResult.rows);

                outgoingStatus.student=queryResult.rows[0];
                callback(null, outgoingStatus);





      }
    });
  };

  return {
    optionClassForm: optionClassForm,

    viewStudent:viewStudent,
  };
};