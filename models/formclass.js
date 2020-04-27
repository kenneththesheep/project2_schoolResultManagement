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


 let updateStudent = (incoming, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

    let query = 'UPDATE students SET name = ($1), gender =($2), personalContact =($3), parentGuardianName =($4), parentGuardianNumber = ($5), relationship = ($6), CCA = ($7) WHERE id = ($8)';
    let student_data = [incoming.student.name, incoming.student.gender, parseInt(incoming.student.studentContact), incoming.student.parentGuardianName, parseInt(incoming.student.parentGuardianContact), incoming.student.parentGuardianRelationship, incoming.student.cca, parseInt(incoming.id)] ;

    let outgoingStatus = {};
    dbPoolInstance.query(query, student_data, (error, queryResult) => {
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





  let addStudent = (incoming, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%incoming%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(incoming);
    let student_id="";
    let class_id="";
    let teacher_id=incoming.teachers_id;
    let query = 'INSERT INTO students (name, gender, personalContact, parentGuardianName, parentGuardianNumber, relationship, CCA) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id';
    //let query = 'SELECT * FROM teachers';
    let student_data = [incoming.name, incoming.gender, parseInt(incoming.studentContact), incoming.parentGuardianName, parseInt(incoming.parentGuardianContact), incoming.parentGuardianRelationship, incoming.cca] ;
    //loginname= [ 'bobobobob'];
    let outgoingStatus = {};
    dbPoolInstance.query(query, student_data, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        console.log(error);
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed
                //console.log(queryResult.rows);
                studentId=parseInt( queryResult.rows[0].id ) ;

                outgoingStatus.student_Id=queryResult.rows[0].id;
                   let classquery = 'SELECT class_id FROM teacher_class WHERE teacher_id = ($1)';
    //let query = 'SELECT * FROM teachers';
    let teacher_check= [teacher_id] ;
    //loginname= [ 'bobobobob'];

    dbPoolInstance.query(classquery, teacher_check, (errorClass, queryClassResult) => {
      if( errorClass ){

        // invoke callback function with results after query has executed
        console.log(errorClass);
        callback(errorClass, null);

      }else{

        // invoke callback function with results after query has executed

                classId=parseInt( queryClassResult.rows[0].class_id ) ;

                console.log(classId);
                //outgoingStatus.class=queryClassResult.rows[0];
                console.log( studentId);
                console.log(class_id);
                let classStudentQuery = 'INSERT INTO student_class (student_id, class_id) VALUES ($1, $2)';
        let newInsertData = [studentId, classId];

    dbPoolInstance.query(classStudentQuery, newInsertData, (errorClass, queryClassResult) => {
      if( errorClass ){

        // invoke callback function with results after query has executed
        console.log(errorClass);
        callback(errorClass, null);

      }else{

        // invoke callback function with results after query has executed




                //outgoingStatus.class=queryClassResult.rows[0];
                callback(null, outgoingStatus);





      }
    });





      }
    });





      }
    });
  };

 let deleteStudent = (remove_id, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%DELETING%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log( remove_id)
    let query = 'DELETE FROM students WHERE id= ($1)';
    //let query = 'SELECT * FROM teachers';
    let idRemove = [remove_id.id];
    //loginname= [ 'bobobobob'];
    let outgoingStatus = {};
    dbPoolInstance.query(query, idRemove, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

                    let querySecondRemoval = 'DELETE FROM student_class WHERE student_id= ($1)';

    dbPoolInstance.query(querySecondRemoval, idRemove, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

                callback(null, outgoingStatus);





      }
    });





      }
    });
  };

  return {
    optionClassForm: optionClassForm,
    updateStudent:updateStudent,
    viewStudent:viewStudent,
    addStudent: addStudent,
    deleteStudent: deleteStudent,
  };
};