console.log("download Matters")



let cookieDetails=document.cookie.split("; ");
console.log(cookieDetails[1]);
console.log(cookieDetails[1].length);
let teacherId = parseInt(cookieDetails[1].substring(cookieDetails[1].length - 1));
console.log(typeof teacherId)
var data = {
    teacherId : teacherId

  };
  console.log(data);
const downloadResult=(event) => {
console.log("Clicked")
var responseHandler = function(){
   console.log("status text", this.statusText);
  console.log("status code", this.status);
  console.log(this.responseText);
  alert(this.responseText);

}


var request = new XMLHttpRequest();

request.open("POST", "/download/allResult");


request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
request.addEventListener("load", responseHandler);
// send the request
request.send(JSON.stringify(data));

}

let formClassMatterDownload = document.getElementById("downloadResult");
formClassMatterDownload.addEventListener("click",downloadResult);