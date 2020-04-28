/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope


  let initialCheckConduct = (userlogin, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(userlogin);
    let query = 'SELECT classname, class_id FROM class INNER JOIN teacher_class ON (class.id = teacher_class.class_id) WHERE teacher_id= ($1)';
    //let query = 'SELECT * FROM teachers';
    let teacher_id = [userlogin.teacher_id];
    //loginname= [ 'bobobobob'];
    let outgoingStatus = {};
    dbPoolInstance.query(query, teacher_id, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

    outgoingStatus.class = queryResult.rows[0];
    //console.log(outgoingStatus.class.class_id);
                    let studentQuery = 'SELECT * FROM students INNER JOIN student_class ON (students.id = student_class.student_id) WHERE class_id= ($1)';
        let class_id = [parseInt(outgoingStatus.class.class_id)]
    //loginname= [ 'bobobobob'];

    dbPoolInstance.query(studentQuery, class_id, (error, queryStudentResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{
        outgoingStatus.students=queryStudentResult.rows;
        console.log(outgoingStatus);
        let checkJoinQuery = 'SELECT COUNT(*) FROM student_conduct WHERE ';
        let studentIdArray = [];
        for ( let studentCount = 0; studentCount < outgoingStatus.students.length; studentCount++)
        {
            checkJoinQuery = checkJoinQuery + ` student_id = ($${studentCount+1}) OR`;
            studentIdArray.push( outgoingStatus.students[studentCount].student_id );

        }
        checkJoinQuery = checkJoinQuery.substring(0, checkJoinQuery.length -2);
        console.log( checkJoinQuery);
        console.log(studentIdArray);

        dbPoolInstance.query(checkJoinQuery, studentIdArray, (error, joinResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{
           let matches = parseInt (joinResult.rows[0].count);
           if (matches === 0)
           {
            outgoingStatus.initialisation = true;
           }
           else{
            outgoingStatus.initialisation = false;
           }
        // invoke callback function with results after query has executed




                //outgoingStatus = queryResult.rows[0];
                callback(null, outgoingStatus);





      }
    });





      }
    });





      }
    });
  };




 let addForm = (userlogin, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(userlogin);
    let query = 'SELECT classname, class_id FROM class INNER JOIN teacher_class ON (class.id = teacher_class.class_id) WHERE teacher_id= ($1)';
    //let query = 'SELECT * FROM teachers';
    let teacher_id = [userlogin.teacher_id];
    //loginname= [ 'bobobobob'];
    let outgoingStatus = {};
    dbPoolInstance.query(query, teacher_id, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

    outgoingStatus.class = queryResult.rows[0];
    //console.log(outgoingStatus.class.class_id);
                    let studentQuery = 'SELECT * FROM students INNER JOIN student_class ON (students.id = student_class.student_id) WHERE class_id= ($1)';
        let class_id = [parseInt(outgoingStatus.class.class_id)]
    //loginname= [ 'bobobobob'];

    dbPoolInstance.query(studentQuery, class_id, (error, queryStudentResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{
        outgoingStatus.students=queryStudentResult.rows;
        console.log(outgoingStatus);
        callback(null, outgoingStatus);

      }
    });

      }
    });
  };


 let editSingle = (conductlogin, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

    let query = 'SELECT *  FROM conduct WHERE id= ($1)';
    //let query = 'SELECT * FROM teachers';
    let conduct_id = [conductlogin.conductId];
    //loginname= [ 'bobobobob'];
    let outgoingStatus = {};
    dbPoolInstance.query(query, conduct_id, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

    outgoingStatus.conduct = queryResult.rows[0];
    //console.log(outgoingStatus.class.class_id);
                    let studentQuery = 'SELECT * FROM students INNER JOIN student_conduct ON (students.id = student_conduct.student_id) WHERE conduct_id= ($1)';

    //loginname= [ 'bobobobob'];

    dbPoolInstance.query(studentQuery, conduct_id, (error, queryStudentResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{
        outgoingStatus.students=queryStudentResult.rows;
        console.log(outgoingStatus);
        callback(null, outgoingStatus);

      }
    });

      }
    });
  };

 let editSingleProcess = (conductlogin, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

    let query = 'UPDATE conduct SET conductgrade = ($2), remark = ($3) WHERE id= ($1)';
    //let query = 'SELECT * FROM teachers';
    let conduct_id = [conductlogin.conductId, conductlogin.conductGrade, conductlogin.remarks];
    //loginname= [ 'bobobobob'];
    let outgoingStatus = {};
    dbPoolInstance.query(query, conduct_id, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

    outgoingStatus.conduct = queryResult.rows[0];
    callback(null, outgoingStatus);
    //console.log(outgoingStatus.class.class_id);


      }
    });
  };




let viewForm = (userlogin, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(userlogin);
    let query = 'SELECT classname, class_id FROM class INNER JOIN teacher_class ON (class.id = teacher_class.class_id) WHERE teacher_id= ($1)';
    //let query = 'SELECT * FROM teachers';
    let teacher_id = [userlogin.teacher_id];
    //loginname= [ 'bobobobob'];
    let outgoingStatus = {};
    dbPoolInstance.query(query, teacher_id, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

    outgoingStatus.class = queryResult.rows[0];
    //console.log(outgoingStatus.class.class_id);
                    let studentQuery = 'SELECT * FROM students INNER JOIN student_class ON (students.id = student_class.student_id) WHERE class_id= ($1)';
        let class_id = [parseInt(outgoingStatus.class.class_id)]
    //loginname= [ 'bobobobob'];

    dbPoolInstance.query(studentQuery, class_id, (error, queryStudentResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{
        outgoingStatus.students=queryStudentResult.rows;
        console.log(outgoingStatus);

    //console.log(outgoingStatus.class.class_id);
                    let studentConductQuery = 'SELECT * FROM conduct INNER JOIN student_conduct ON (conduct.id = student_conduct.conduct_id) WHERE ';
                    let join_array=[];
        for (let count = 0; count< outgoingStatus.students.length; count ++)
        {
            studentConductQuery += `student_id = ($${count+1}) OR `;
            join_array.push ( outgoingStatus.students[count].student_id);
        }
        studentConductQuery = studentConductQuery.substring(0, studentConductQuery.length-3);
        console.log(studentConductQuery);

    dbPoolInstance.query(studentConductQuery, join_array, (errorConduct, queryStudentConductResult) => {
      if( errorConduct ){
        console.log(errorConduct);

        // invoke callback function with results after query has executed
        callback(errorConduct, null);

      }else{
        outgoingStatus.conduct=queryStudentConductResult.rows;
        console.log(outgoingStatus);
        callback(null, outgoingStatus);

      }
    });

      }
    });

      }
    });
  };



let processForm = (dataEntry, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    let outgoingStatus={};
    let studentQuery = 'SELECT * FROM students INNER JOIN student_class ON (students.id = student_class.student_id) WHERE class_id= ($1)';
    console.log(dataEntry);
    let class_id = [parseInt(dataEntry.classIndex)]
    //loginname= [ 'bobobobob'];

    dbPoolInstance.query(studentQuery, class_id, (error, queryStudentResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{
        outgoingStatus.students=queryStudentResult.rows;
        console.log(outgoingStatus);
    let conductQuery = 'INSERT INTO conduct (remark, conductgrade) VALUES';
    for( let conductCount = 0; conductCount < queryStudentResult.rows.length*2; conductCount+=2)
    {
        conductQuery += `($${conductCount+1}, $${conductCount+2}),`;
    }
    let dataArray = [];
    for( conductCount = 0; conductCount < queryStudentResult.rows.length; conductCount++)
    {
        dataArray.push(dataEntry.remarksArray[conductCount]);
        dataArray.push(dataEntry.conductGradeArray[conductCount]);
    }
    console.log(dataArray);
    conductQuery = conductQuery.substring(0, conductQuery.length-1);
    conductQuery += ' RETURNING id';
    //console.log(dataEntry);
    console.log('conduct Query is ' + conductQuery);

    //console.log(dataEntry);
    //let class_id = [parseInt(dataEntry.classIndex)]
    //loginname= [ 'bobobobob'];

    dbPoolInstance.query(conductQuery, dataArray, (error, queryConductResult) => {
      if( error ){
        console.log(error);
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{
        outgoingStatus.conduct=queryConductResult.rows;

        let finalQuery = 'INSERT INTO student_conduct (student_id, conduct_id) VALUES ';
        let finalArray = [];
        for(let finalCount = 0 ; finalCount<outgoingStatus.conduct.length*2; finalCount+=2)
        {
            finalQuery += `($${finalCount+1}, $${finalCount+2}),`
        }

        for(let finalCount = 0 ; finalCount<outgoingStatus.conduct.length; finalCount++)
        {
            finalArray.push(outgoingStatus.students[finalCount].student_id)
            finalArray.push(outgoingStatus.conduct[finalCount].id)
        }
        finalQuery = finalQuery.substring(0, finalQuery.length-1);
        console.log(outgoingStatus);
            dbPoolInstance.query(finalQuery, finalArray, (error, queryConductResult) => {
      if( error ){
        console.log(error);
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{
        //outgoingStatus.conduct=queryConductResult.rows;
        console.log(outgoingStatus);
        callback(null, outgoingStatus);

      }
    });

      }
    });

      }
    });
  };



  return {
    initialCheckConduct:initialCheckConduct,
    addForm: addForm,
    processForm: processForm,
    viewForm: viewForm,
    editSingle: editSingle,
    editSingleProcess: editSingleProcess
  };
};