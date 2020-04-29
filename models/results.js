/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let findStudents = (user, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(user);
    let outgoingStatus = {};
    let query = 'SELECT class_id FROM teachers INNER JOIN teacher_class ON (teachers.id = teacher_class.teacher_id) WHERE teacher_id= ($1)';
    //let query = 'SELECT * FROM teachers';
    let userId = [parseInt(user.id)];
    //loginname= [ 'bobobobob'];

    dbPoolInstance.query(query, userId, (error, queryResult) => {
      if( error ){
        console.log(error);
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed


                outgoingStatus= queryResult.rows[0];

                    let studentsQuery = 'SELECT name, class_id, student_id FROM students INNER JOIN student_class ON (students.id = student_class.student_id) WHERE class_id= ($1)';
    //let query = 'SELECT * FROM teachers';
    let classId = [parseInt(outgoingStatus.class_id)];
    //loginname= [ 'bobobobob'];

    dbPoolInstance.query(studentsQuery, classId, (studentError, queryStudentResult) => {
      if( studentError ){
        console.log(studentError);
        // invoke callback function with results after query has executed
        callback(studentError, null);

      }else{

        // invoke callback function with results after query has executed


                outgoingStatus.students= queryStudentResult.rows;

                callback(null, outgoingStatus);





      }
    });





      }
    });
  };




 let checkSubjectNotTaken = (student, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(student);
    let outgoingStatus = {};
    let query = 'SELECT * FROM subject WHERE subjectname NOT IN (SELECT subjectname FROM subject INNER JOIN student_subject ON (subject.id = student_subject.subject_id) WHERE student_id= ($1) )';
    //let query = 'SELECT * FROM teachers';
    let studentId = [parseInt(student.id)];
    //loginname= [ 'bobobobob'];
    console.log(studentId);
    dbPoolInstance.query(query, studentId, (error, queryResult) => {
      if( error ){
        console.log(error);
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

                console.log("dfljflkajlfdjalfdalfjlafj");
                outgoingStatus= queryResult.rows;
                callback(null, outgoingStatus);







      }
    });
  };


let checkSubjectTaken = (student, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(student);
    let outgoingStatus = {};
    let query = 'SELECT * FROM subject INNER JOIN student_subject ON (subject.id = student_subject.subject_id) WHERE student_id= ($1)';
    //let query = 'SELECT * FROM teachers';
    let studentId = [parseInt(student.id)];
    //loginname= [ 'bobobobob'];
    console.log(studentId);
    dbPoolInstance.query(query, studentId, (error, queryResult) => {
      if( error ){
        console.log(error);
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

                console.log("dfljflkajlfdjalfdalfjlafj");
                outgoingStatus= queryResult.rows;
                callback(null, outgoingStatus);







      }
    });
  };

  return {
    findStudents:findStudents,
    checkSubjectNotTaken: checkSubjectNotTaken,
    checkSubjectTaken: checkSubjectTaken,
  };
};