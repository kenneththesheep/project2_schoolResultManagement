console.log("hello to get ready to download");
console.log(document.body);
let nameBox= document.getElementById('student_name');
let name = nameBox.innerText;

let classBox= document.getElementById('class');
let classText = classBox.innerText;

let conductGradeBox = document.getElementById('conductgrade');
let conductgrade = conductGradeBox.innerText;

let remarkBox = document.getElementById('remark');
let remark = remarkBox.innerText;

let overallPercentBox = document.getElementById('overallPercent');
let overallPercent = overallPercentBox.innerText;

let passStatusBox =document.getElementById('passStatus');
let passStatus = passStatusBox.innerText;

let promotionStatusBox = document.getElementById('promotionStatus');
let promotionStatus = promotionStatusBox.innerText;

let subjectNameBox = document.querySelectorAll('.subject');
let sa1Box = document.querySelectorAll('.sa1');
let sa2Box = document.querySelectorAll('.sa2');
let overallBox = document.querySelectorAll('.overall');

let subjectName= [];
let sa1 = [];
let sa2 =[];
let overall = [];
for( var i=0; i<subjectNameBox.length; i++){
      console.log(i);
      subjectName.push(subjectNameBox[i].innerText);
      sa1.push(sa1Box[i].innerText);
      sa2.push(sa2Box[i].innerText);
      overall.push(overallBox[i].innerText);
}
console.log(subjectName);
console.log(sa1);
console.log(sa2);
console.log(overall);
// require dependencies

let data = {
    studentname: name,
    stuentclass: classText,
    subjectName: subjectName,
    sa1: sa1,
    sa2: sa2,
    overall: overall,
    conductgrade: conductgrade,
    remark: remark,
    overallPercent: overallPercent,
    passStatus: passStatus,
    promotionStatus: promotionStatus

}

console.log(data);
const pdfCreate=(event)=>{
    console.log("hello to click");
    var responseHandler = function(){
   console.log("status text", this.statusText);
  console.log("status code", this.status);
  console.log(this.responseText);
  alert(this.responseText);

}


var request = new XMLHttpRequest();

request.open("POST", "/download/StudentReport");


request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
request.addEventListener("load", responseHandler);
// send the request
request.send(JSON.stringify(data));
}


let downloadButton = document.getElementById("individualStudentReport");
downloadButton.addEventListener("click",pdfCreate);