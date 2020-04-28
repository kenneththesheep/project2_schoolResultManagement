
var trySplit = document.cookie.split("; ");
var userId = trySplit[1].substring(7);
userId = parseInt(userId);
console.log(userId);
var data = {
    teacher_id : userId

  };
    console.log("Good Morning");
    var request = new XMLHttpRequest();
/*var request = new XMLHttpRequest();
    var loadResponseHandler = function() {
        console.log("Listening");
  const status = JSON.parse(this.responseText) ;
  console.log (status);
  //console.log("status text", this.statusText);
  //console.log("status code", this.status);

};


console.log("Going to post");
request.open("POST", "/conduct/initialCheck");
console.log(request);

 var data = {
    teacher_id : userId

  };
request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
request.addEventListener("load", loadResponseHandler);
console.log (request);
  request.send(JSON.stringify(data));*/


var responseHandler = function() {
  //console.log("response text", this.responseText);
  console.log("status text", this.statusText);
  console.log("status code", this.status);
  const information = JSON.parse(this.responseText);
  console.log(information);
  if(information.initialisation)
  {
    console.log("Something will happen");
    document.body.innerHTML="";
    let container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("border");
    document.body.appendChild(container);

    let topRow = document.createElement("div");
    topRow.classList.add("row");
    topRow.classList.add("border");
    topRow.classList.add("mt-5");
    container.appendChild(topRow);

    let topCol = document.createElement("div");
    topCol.classList.add("col-12");
    topCol.classList.add("border");
    topCol.classList.add("text-center");
    topCol.classList.add("mt-5");
    topRow.appendChild(topCol);

    let header = document.createElement("h1");
    header.innerText = `Conduct Grading and Remarks`
    topCol.appendChild(header);

    let bottomRow = document.createElement("div");
    bottomRow.classList.add("row");
    bottomRow.classList.add("border");
    bottomRow.classList.add("mt-5");
    container.appendChild(bottomRow);

    let bottomCol = document.createElement("div");
    bottomCol.classList.add("col-12");
    bottomCol.classList.add("border");
    bottomCol.classList.add("text-center");
    bottomCol.classList.add("mt-5");
    bottomRow.appendChild(bottomCol);

    let spanText = document.createElement("p");
    spanText.innerText = "Click here to add remarks and conduct grading.";
    bottomCol.appendChild(spanText);

    let linkText = document.createElement("a");
    linkText.setAttribute("href", "/conduct/add/");
    linkText.innerText = "Add Conduct Grading and Remarks";
    bottomCol.appendChild(linkText);

  }
  else
  {
    console.log("Something will happen");
    document.body.innerHTML="";
    let container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("border");
    document.body.appendChild(container);

    let topRow = document.createElement("div");
    topRow.classList.add("row");
    topRow.classList.add("border");
    topRow.classList.add("mt-5");
    container.appendChild(topRow);

    let topCol = document.createElement("div");
    topCol.classList.add("col-12");
    topCol.classList.add("border");
    topCol.classList.add("text-center");
    topCol.classList.add("mt-5");
    topRow.appendChild(topCol);

    let header = document.createElement("h1");
    header.innerText = `Conduct Grading and Remarks`
    topCol.appendChild(header);

    let bottomRow = document.createElement("div");
    bottomRow.classList.add("row");
    bottomRow.classList.add("border");
    bottomRow.classList.add("mt-5");
    container.appendChild(bottomRow);

    let bottomLeftCol = document.createElement("div");
    bottomLeftCol.classList.add("col-6");
    bottomLeftCol.classList.add("border");
    bottomLeftCol.classList.add("text-center");
    bottomLeftCol.classList.add("mt-5");
    bottomRow.appendChild(bottomLeftCol);

    let spanLeftText = document.createElement("p");
    spanLeftText.innerText = "Click here to view remarks and conduct grading.";
    bottomLeftCol.appendChild(spanLeftText);

    let linkLeftText = document.createElement("a");
    linkLeftText.setAttribute("href", "/conduct/view");
    linkLeftText.innerText = "View Conduct Grading and Remarks";
    bottomLeftCol.appendChild(linkLeftText);

    let bottomRightCol = document.createElement("div");
    bottomRightCol.classList.add("col-6");
    bottomRightCol.classList.add("border");
    bottomRightCol.classList.add("text-center");
    bottomRightCol.classList.add("mt-5");
    bottomRow.appendChild(bottomRightCol);

    let spanRightText = document.createElement("p");
    spanRightText.innerText = "Click here to edit remarks and conduct grading.";
    bottomRightCol.appendChild(spanRightText);

    let linkRightText = document.createElement("a");
    linkRightText.setAttribute("href", "#");
    linkRightText.innerText = "Edit Conduct Grading and Remarks";
    bottomRightCol.appendChild(linkRightText);

  }
};

// make a new request


// listen for the request response
request.addEventListener("load", responseHandler);

// ready the system by calling open, and specifying the url
/*var url = "/conduct/";*/
request.open("POST", "/conduct/initialCheck");


request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
request.addEventListener("load", responseHandler);
// send the request
request.send(JSON.stringify(data));