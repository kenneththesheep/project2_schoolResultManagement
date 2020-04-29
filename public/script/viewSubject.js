console.log("view subject");





function selectName(event){
    console.log(event.target.value);

    var request = new XMLHttpRequest();
    var data = {
        student_id : event.target.value
    }
    var responseHandler = function() {
        //console.log(JSON.parse(this.responseText));
        console.log(this.responseText);
        let subject = JSON.parse(this.responseText);
        console.log(subject);
        console.log(subject.length);
        let subjectEntryBox = document.getElementById("subject");
        subjectEntryBox.innerHTML = "";
        let header = document.createElement("h2");
        header.innerText = " Subject taken";
        subjectEntryBox.appendChild(header);
        for(let subjectCount = 0; subjectCount < subject.length; subjectCount ++)
        {
            console.log(subject[subjectCount]);
            let paragraph = document.createElement('p');
            paragraph.innerText = subject[subjectCount].subjectname;
            subjectEntryBox.appendChild(paragraph);
        }
        ////// Add the select box here
    }
    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    /*var url = "/conduct/";*/
    request.open("POST", "/results/checkSubjectTaken");


    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.addEventListener("load", responseHandler);
    // send the request
    request.send(JSON.stringify(data));
    }

let selectBox = document.getElementById("select");
selectBox.addEventListener("change", selectName);