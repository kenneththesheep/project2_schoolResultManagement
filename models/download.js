/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
const Json2csvParser = require("json2csv").Parser;
const fs = require("fs");
var http = require('http');
const downloadsFolder = require('downloads-folder');
  // `dbPoolInstance` is accessible within this function scope

  let download = (userlogin, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(userlogin);
    let query = 'SELECT student_class.student_id, students.name, students.gender, students.personalcontact, students.parentguardianname, students.parentguardiannumber, students.relationship, students.cca FROM teachers INNER JOIN teacher_class ON (teachers.id= teacher_class.teacher_id) INNER JOIN student_class ON(teacher_class.class_id = student_class.class_id) INNER JOIN students ON(students.id = student_class.student_id) WHERE teacher_id = ($1)';
    //let query = 'SELECT * FROM teachers';
    let loginname = [userlogin.teacher_id];
    //loginname= [ 'bobobobob'];
    let outgoingStatus = {};
    dbPoolInstance.query(query, loginname, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed
        let downloadDirectory = downloadsFolder();
        console.log(downloadsFolder());
        console.log(downloadDirectory);
      const jsonData = JSON.parse(JSON.stringify(queryResult.rows));
      console.log("jsonData", jsonData);

      const json2csvParser = new Json2csvParser({ header: true });
      const csv = json2csvParser.parse(jsonData);

      /*fs.writeFile(downloadDirectory+"/bezkoder_postgresql_fs.csv", csv, function(error)*/
      fs.writeFile("student_details.csv", csv, function(error){
        if (error) throw error;
        console.log("student_details.csv successfully!");
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        console.log(downloadsFolder());
      });
            fs.writeFile(downloadDirectory+"/student_details.csv", csv, function(error){
        if (error) throw error;
        console.log("Write to student_details.csv successfully!");
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        console.log(downloadsFolder());
      });

            outgoingStatus = queryResult.rows;
          callback(null, outgoingStatus);


      }
    });
  };



 let downloadConduct = (userlogin, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%Conduct%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(userlogin);
    let query = 'SELECT student_class.student_id, students.name, conduct.conductgrade, conduct.remark FROM teachers INNER JOIN teacher_class ON (teachers.id= teacher_class.teacher_id) INNER JOIN student_class ON(teacher_class.class_id = student_class.class_id) INNER JOIN students ON (student_class.student_id = students.id ) INNER JOIN student_conduct ON (student_conduct.student_id = student_class.student_id) INNER JOIN conduct ON (student_conduct.conduct_id = conduct.id) WHERE teacher_id = ($1)';
    //let query = 'SELECT * FROM teachers';
    let loginname = [userlogin.teacher_id];
    //loginname= [ 'bobobobob'];
    let outgoingStatus = {};
    dbPoolInstance.query(query, loginname, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        console.log(error)
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed
        let downloadDirectory = downloadsFolder();
        console.log(downloadsFolder());
        console.log(downloadDirectory);
      const jsonData = JSON.parse(JSON.stringify(queryResult.rows));
      console.log("jsonData", jsonData);

      const json2csvParser = new Json2csvParser({ header: true });
      const csv = json2csvParser.parse(jsonData);

      /*fs.writeFile(downloadDirectory+"/bezkoder_postgresql_fs.csv", csv, function(error)*/
      fs.writeFile("student_conduct.csv", csv, function(error){
        if (error) throw error;
        console.log("student_conduct.csv successfully!");
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        console.log(downloadsFolder());
      });
            fs.writeFile(downloadDirectory+"/student_conduct.csv", csv, function(error){
        if (error) throw error;
        console.log("Write to student_conduct.csv successfully!");
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        console.log(downloadsFolder());
      });

            outgoingStatus = queryResult.rows;
          callback(null, outgoingStatus);


      }
    });
  };



 let downloadAllResult = (userlogin, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%Conduct%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(userlogin);
    let query = 'SELECT student_class.student_id, students.name, subject.subjectname, result.SA1, result.SA2, result.overall  FROM teachers INNER JOIN teacher_class ON (teachers.id= teacher_class.teacher_id) INNER JOIN student_class ON(teacher_class.class_id = student_class.class_id) INNER JOIN students ON (student_class.student_id = students.id ) INNER JOIN student_subject_result_class ON (student_subject_result_class.student_id = students.id) INNER JOIN result ON ( student_subject_result_class.result_id = result.id) INNER JOIN subject ON ( subject.id= student_subject_result_class.subject_id)  WHERE teacher_id = ($1)';
    //let query = 'SELECT * FROM teachers';
    let loginname = [userlogin.teacher_id];
    //loginname= [ 'bobobobob'];
    let outgoingStatus = {};
    dbPoolInstance.query(query, loginname, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        console.log(error)
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed
        let downloadDirectory = downloadsFolder();
        console.log(downloadsFolder());
        console.log(downloadDirectory);
      const jsonData = JSON.parse(JSON.stringify(queryResult.rows));
      console.log("jsonData", jsonData);

      const json2csvParser = new Json2csvParser({ header: true });
      const csv = json2csvParser.parse(jsonData);

      /*fs.writeFile(downloadDirectory+"/bezkoder_postgresql_fs.csv", csv, function(error)*/
      fs.writeFile("/app/public/class_result.csv", csv, function(error){
        if (error) throw error;
        console.log("class_result.csv successfully!");
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        console.log(downloadsFolder());
      });
            fs.writeFile(downloadDirectory+"/class_result.csv", csv, function(error){
        if (error) throw error;
        console.log("Write to class_result.csv successfully!");
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        console.log(downloadsFolder());
      });

            outgoingStatus = queryResult.rows;
          callback(null, outgoingStatus);


      }
    });
  };




  return {
    download:download,
    downloadConduct: downloadConduct,
    downloadAllResult: downloadAllResult,
  };
};