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
        let newSubjectHeader = document.createElement("div");
        newSubjectHeader.classList.add("row");
        newSubjectHeader.classList.add("text-center");
        newSubjectHeader.classList.add("mb-1")
        subjectEntryBox.appendChild(newSubjectHeader);
        let newSubjectColumn = document.createElement("div");
        newSubjectColumn.classList.add("col-12");
        newSubjectColumn.classList.add("text-center");
        newSubjectColumn.classList.add("selectedMiniHeaderBox");
        newSubjectHeader.appendChild(newSubjectColumn)


        let header = document.createElement("h2");
        header.innerText = " Subjects taken";
        newSubjectColumn.appendChild(header);

        let newSubjectTakenHeader = document.createElement("div");
        newSubjectTakenHeader.classList.add("row");
        newSubjectTakenHeader.classList.add("text-center");
        subjectEntryBox.appendChild(newSubjectTakenHeader);
        let newSubjectTakenColumn = document.createElement("div");
        newSubjectTakenColumn.classList.add("col-12");
        newSubjectTakenColumn.classList.add("text-center");
        newSubjectTakenColumn.classList.add("selectedMiniBox");
        newSubjectTakenHeader.appendChild(newSubjectTakenColumn)


        for(let subjectCount = 0; subjectCount < subject.length; subjectCount ++)
        {
            console.log(subject[subjectCount]);
            let paragraph = document.createElement('p');
            paragraph.innerText = subject[subjectCount].subjectname;
            newSubjectTakenColumn.appendChild(paragraph);
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