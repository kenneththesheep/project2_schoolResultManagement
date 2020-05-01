/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
const Json2csvParser = require("json2csv").Parser;
const fs = require("fs");
const PDFDocument = require('pdfkit');
const blobStream  = require('blob-stream');
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
      fs.writeFile("public/csv/student_details.csv", csv, function(error){
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
          callback(null, "Write to student_details.csv successfully!");


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
      fs.writeFile("public/csv/student_conduct.csv", csv, function(error){
        if (error) throw error;
        console.log("student_conduct.csv successfully!");
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        console.log(downloadsFolder());
      });
            fs.writeFile(downloadDirectory+"student_conduct.csv", csv, function(error){
        if (error) throw error;
        console.log("Write to student_conduct.csv successfully!");
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        console.log(downloadsFolder());
      });

            outgoingStatus = queryResult.rows;
          callback(null, "student_conduct.csv successfully!");


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
      fs.writeFile("public/csv/class_result.csv", csv, function(error){
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
          callback(null, "Write to class_result.csv successfully!");


      }
    });
  };

let downloadResultBySubject = (userlogin, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%Conduct%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(userlogin);
    let query = 'SELECT student_class.student_id, students.name, subject.subjectname, result.SA1, result.SA2, result.overall  FROM teachers INNER JOIN teacher_class ON (teachers.id= teacher_class.teacher_id) INNER JOIN student_class ON(teacher_class.class_id = student_class.class_id) INNER JOIN students ON (student_class.student_id = students.id ) INNER JOIN student_subject_result_class ON (student_subject_result_class.student_id = students.id) INNER JOIN result ON ( student_subject_result_class.result_id = result.id) INNER JOIN subject ON ( subject.id= student_subject_result_class.subject_id)  WHERE teacher_id = ($1) AND subject_id = ($2)';
    //let query = 'SELECT * FROM teachers';
    let loginname = [userlogin.teacher_id, userlogin.subject_id];
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
        let subject = queryResult.rows[0].subjectname;
      const jsonData = JSON.parse(JSON.stringify(queryResult.rows));
      console.log("jsonData", jsonData);

      const json2csvParser = new Json2csvParser({ header: true });
      const csv = json2csvParser.parse(jsonData);

      /*fs.writeFile(downloadDirectory+"/bezkoder_postgresql_fs.csv", csv, function(error)*/
      fs.writeFile("public/csv/"+subject+"_result.csv", csv, function(error){
        if (error) throw error;
        console.log("Write to " +subject+"_result.csv successfully!");
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        console.log(downloadsFolder());
      });
            fs.writeFile(downloadDirectory+"/"+subject+"_result.csv", csv, function(error){
        if (error) throw error;
        console.log("Write to " +subject+"_result.csv successfully!");
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        console.log(downloadsFolder());
      });

            outgoingStatus = queryResult.rows;
          callback(null, "Write to " +subject+"_result.csv successfully!");


      }
    });
  };


let individualStudentReport = (data, callback) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%Conduct%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(data);
    // create a document and pipe to a blob
var doc = new PDFDocument();
let downloadDirectory = downloadsFolder();
var stream = doc.pipe(fs.createWriteStream(downloadDirectory +'/Testfile.pdf'));
console.log(data.stuentclass);
console.log(downloadDirectory);

doc
  .text('', 180, 30)
  .font('Times-Roman', 30)
  .fontSize(40)
  .font('Times-Bold', 20)
  .text('HDP Result Slip', {
    width: 500,
    align: 'center',
    indent: 30,
    columns: 2,
    height: 300,
    ellipsis: true
  });


  doc
   .font('Times-Roman', 20)
  .text(data.studentname, 30, 90)
  .font('Times-Roman', 20)
  .moveDown();

 doc
  .text(data.stuentclass, 30, 120)
  .font('Times-Bold', 20);

doc
    .text("Subject Name", 30, 170)
    .text("SA1", 200, 170)
    .text("SA2", 290, 170)
    .text("Overall", 390, 170)
    .font('Times-Roman', 20)
    .text(data.subjectName[0], 30, 220)
    .text(data.sa1[0], 200, 220)
    .text(data.sa2[0], 290, 220)
    .text(data.overall[0], 390, 220)
    .text(data.subjectName[1], 30, 270)
    .text(data.sa1[1], 200, 270)
    .text(data.sa2[1], 290, 270)
    .text(data.overall[1], 390, 270)
    .text(data.subjectName[2], 30, 320)
    .text(data.sa1[2], 200, 320)
    .text(data.sa2[2], 290, 320)
    .text(data.overall[2], 390, 320)
    .text(data.subjectName[3], 30, 370)
    .text(data.sa1[3], 200, 370)
    .text(data.sa2[3], 290, 370)
    .text(data.overall[3], 390, 370)
    .text(data.overallPercent, 30, 430)
    .text(data.passStatus, 30, 480)
    .text(data.promotionStatus, 270, 480)
    .text(data.conductgrade, 30, 530)
    .text(data.remark, 30, 580)
    .text("V/Principal's", 30, 670)
    .text("signature", 30, 690)
    .text("Teacher's ", 200, 670)
    .text("signature", 200, 690)
    .text("Parent/Guardian's ", 390, 670)
    .text("signature", 390, 690);

doc
    .moveTo(20, 200)
    .lineTo(470, 200)
    .stroke();

doc
    .moveTo(190, 160)
    .lineTo(190, 400)
    .stroke();

doc
    .moveTo(280, 160)
    .lineTo(280, 400)
    .stroke();

doc
    .moveTo(380, 160)
    .lineTo(380, 400)
    .stroke();

doc
    .moveTo(20, 660)
    .lineTo(150, 660)
    .stroke();

doc
    .moveTo(190, 660)
    .lineTo(320, 660)
    .stroke();

doc
    .moveTo(380, 660)
    .lineTo(530, 660)
    .stroke();

doc.end();
callback(null, "Created pdf in download folder");

  };

  return {
    download:download,
    downloadConduct: downloadConduct,
    downloadAllResult: downloadAllResult,
    downloadResultBySubject: downloadResultBySubject,
    individualStudentReport: individualStudentReport,
  };
};