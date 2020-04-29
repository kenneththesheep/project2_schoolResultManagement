console.log("hellow");

// what to do when we recieve the request
var responseHandler = function() {

  let subjects = JSON.parse(this.responseText);
  console.log(subjects);

        let subjectBox = document.createElement('select');
        subjectBox.name = 'subject_id';
        subjectBox.size = 1;
        subjectBox.required=true;
        for( let subjectCount = 0; subjectCount < subjects.length; subjectCount ++)
        {
            let selectOption = document.createElement('option');
            selectOption.value = subjects[subjectCount].id;
            selectOption.innerText = subjects[subjectCount].subjectname;
            subjectBox.appendChild(selectOption);

        }

        let subjectBox2 = document.createElement('select');
        subjectBox2.name = 'subject_id';
        subjectBox2.size = 1;
        subjectBox2.required=true;
        for( let subjectCount = 0; subjectCount < subjects.length; subjectCount ++)
        {
            let selectOption = document.createElement('option');
            selectOption.value = subjects[subjectCount].id;
            selectOption.innerText = subjects[subjectCount].subjectname;
            subjectBox2.appendChild(selectOption);

        }


  let addColumn = document.getElementById('addResult');
  let addForm =document.createElement('form');
  addForm.classList.add("mt-2");
  addForm.action="/results/add";
  addForm.method="GET";
  addColumn.appendChild(addForm);
  addForm.appendChild(subjectBox);
  let insertButton=document.createElement('input');
  insertButton.type="submit";
  insertButton.value="Enter Results";
    addForm.appendChild(insertButton);


let editColumn = document.getElementById('editResult');
  let editForm =document.createElement('form');
    editForm.classList.add("mt-2");
    editForm.action="/results/edit";
    editForm.method="GET";
    editColumn.appendChild(editForm);
    editForm.appendChild(subjectBox2);
      let insertButton2=document.createElement('input');
  insertButton2.type="submit";
  insertButton2.value="Enter Results";
    editForm.appendChild(insertButton2);
/*
  let editForm =document.createElement('form');
  editForm.classList.add("mt-2");
  editForm.action="/results/edit";
  editForm.method="GET";
  editColumn.appendChild(addForm);
  editForm.appendChild(subjectBox);
  editForm.appendChild(insertButton);*/

};

// make a new request
var request = new XMLHttpRequest();

// listen for the request response
request.addEventListener("load", responseHandler);

// ready the system by calling open, and specifying the url
var url = "/utility/";
request.open("GET", url);

// send the request
request.send();