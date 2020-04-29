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
        let subject = JSON.parse(this.responseText);
        console.log(subject);
        console.log(subject.length);
        let subjectEntryBox = document.getElementById("subject");
        subjectEntryBox.innerHTML = "";
        let header = document.createElement('h3');
        header.innerText = "Select Subjects to add"
        subjectEntryBox.appendChild(header);
        for( let subjectCount = 0; subjectCount < subject.length; subjectCount ++)
        {
            console.log (subject [ subjectCount ]);
            let label = document.createElement("label");
            label.innerText = "        " + subject [ subjectCount] .subjectname + "        ";
            let space = document.createElement("span");
            space.setAttribute("class", "mr-1");
            let inputBox = document.createElement("input");
            inputBox.type= "checkbox";
            inputBox.setAttribute = ("class", "ml-3");
            inputBox.name = "subject_id";
            inputBox.value = subject [subjectCount] .id;
            subjectEntryBox.appendChild(inputBox);
            subjectEntryBox.appendChild(space);
            subjectEntryBox.appendChild(label);
            let lineBreak = document.createElement ( "br");
            subjectEntryBox.appendChild(lineBreak);

        }
        ////// Add the select box here
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