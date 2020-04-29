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

let processAddSubject = (student, callback) => {
    console.log("###########################");
   console.log(student);
    let outgoingStatus = {};
    let query = 'INSERT INTO student_subject (student_id, subject_id) VALUES ';
    //let query = 'SELECT * FROM teachers';

    let student_subject_array = [parseInt(student.id)];
    for( let count =0; count < student.subject_id.length; count ++)
    {
        console.log(student.subject_id[count]);
        query += `($1, $${count+2}), `;
        student_subject_array.push(parseInt(student.subject_id[count]));
    }
    query = query.substring(0, query.length - 2);
    console.log(student_subject_array);
    console.log(query);
    dbPoolInstance.query(query, student_subject_array, (error, queryResult) => {
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

let processRemoveSubject = (student, callback) => {
    console.log("############Removal in process###############");
   console.log(student);
    let outgoingStatus = {};
    let query = 'DELETE FROM student_subject WHERE student_id=$1 AND subject_id =$2';
    //let query = 'SELECT * FROM teachers';

    let student_subject_array = [parseInt(student.id), student.subject_id];

    console.log(student_subject_array);
    console.log(query);
   dbPoolInstance.query(query, student_subject_array, (error, queryResult) => {
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

let viewStudentFromFormClassWithSubject = (user, callback) => {
    console.log("############Good Utility###############");

    let outgoingStatus = {};
    let query = 'SELECT class_id FROM teachers INNER JOIN teacher_class ON (teachers.id = teacher_class.teacher_id) WHERE teacher_id = ($1)';

    let teacher_array = [user.teacher_id];

   dbPoolInstance.query(query, teacher_array, (error, queryResult) => {
      if( error ){
        console.log(error);
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

      outgoingStatus.class_id= queryResult.rows[0].class_id;
      let student_query = 'SELECT name, student_id FROM students INNER JOIN student_class ON(students.id = student_class.student_id) WHERE class_id = ($1)';
      let student_array=[outgoingStatus.class_id]
        dbPoolInstance.query(student_query, student_array, (errorStudent, queryStudentResult) => {
        if( errorStudent ){
        console.log(errorStudent);
        // invoke callback function with results after query has executed
        callback(errorStudent, null);

        }else{

        // invoke callback function with results after query has executed

          outgoingStatus.student= queryStudentResult.rows;

        let activeStudentQuery = 'SELECT * FROM student_subject WHERE ';

        let activeStudentArray = [user.subject_id];
        for (let count =0; count < outgoingStatus.student.length; count ++)
        {
            activeStudentQuery += `(student_id = ($${count+2}) AND subject_id = ($1)) OR `;
            activeStudentArray.push(outgoingStatus.student[count].student_id);
        }
        activeStudentQuery= activeStudentQuery.substring(0, activeStudentQuery.length-3)
        console.log(activeStudentQuery);
        console.log(activeStudentArray);

        dbPoolInstance.query(activeStudentQuery, activeStudentArray, (errorActiveStudent, queryActiveStudentResult) => {
        if( errorActiveStudent ){
        console.log(errorActiveStudent);
        // invoke callback function with results after query has executed
        callback(errorActiveStudent, null);

        }else{

        // invoke callback function with results after query has executed

          outgoingStatus.activeStudent= queryActiveStudentResult.rows;
          callback(null, outgoingStatus);

        }
        });

        }
        });

      }
    });
  };



  return {
    findStudents:findStudents,
    checkSubjectNotTaken: checkSubjectNotTaken,
    checkSubjectTaken:checkSubjectTaken,
    checkSubjectTaken: checkSubjectTaken,
    processAddSubject: processAddSubject,
    processRemoveSubject: processRemoveSubject,
    viewStudentFromFormClassWithSubject:viewStudentFromFormClassWithSubject,
  };
};