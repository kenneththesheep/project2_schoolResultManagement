console.log("remove subject");





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
        header.innerText = "Select Subject to remove"
        subjectEntryBox.appendChild(header);
        let subjectBox = document.createElement('select');
        subjectBox.name = 'subject_id';
        subjectBox.size = 1;
        subjectEntryBox.appendChild(subjectBox)
        for( let subjectCount = 0; subjectCount < subject.length; subjectCount ++)
        {
            let selectOption = document.createElement('option');
            selectOption.value = subject[subjectCount].subject_id;
            selectOption.innerText = subject[subjectCount].subjectname;
            subjectBox.appendChild(selectOption);

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