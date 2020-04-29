console.log("add subject");





function selectName(event){
    console.log(event.target.value);

    var request = new XMLHttpRequest();
    var data = {
        student_id : event.target.value
    }
    var responseHandler = function() {
        //console.log(JSON.parse(this.responseText));
        console.log(this.responseText);
    }
    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    /*var url = "/conduct/";*/
    request.open("POST", "/results/checkSubjectNotTaken");


    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.addEventListener("load", responseHandler);
    // send the request
    request.send(JSON.stringify(data));
    }

let selectBox = document.getElementById("select");
selectBox.addEventListener("change", selectName);