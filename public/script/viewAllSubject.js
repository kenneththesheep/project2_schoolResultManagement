
// what to do when we recieve the request
var responseHandler = function() {

  let subjects = JSON.parse(this.responseText);


        let subjectBox = document.createElement('select');
        subjectBox.classList.add("selecttBox");
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




  let addColumn = document.getElementById('addResult');
  let newAddRow = document.createElement('div');
  newAddRow.classList.add('row');
  addColumn.appendChild(newAddRow);
  let newAddRowColumn = document.createElement('div');
  newAddRowColumn.classList.add('col-12');
  newAddRowColumn.classList.add('text-center');
  newAddRow.appendChild(newAddRowColumn);
  let addForm =document.createElement('form');
  addForm.classList.add("mt-2");
  addForm.action="/results/add";
  addForm.method="GET";
  newAddRowColumn.appendChild(addForm);

  let newSecondRow = document.createElement('div');
  newSecondRow.classList.add('row');
  addColumn.appendChild(newSecondRow);


  addForm.appendChild(subjectBox);
  let insertButton=document.createElement('input');
  insertButton.type="submit";
  insertButton.value="Enter Subject Result";
  insertButton.classList.add("Landingbutton");
  insertButton.classList.add("insertAddResultButtonMargin");
    addForm.appendChild(insertButton);



/*
*/

var responseHandler2 = function()
{

    let newLine = document.createElement("br");
    let link_to_view= document.getElementById("link_to_view");
    let middle_text=document.getElementById("middleRowText");
    let bottom_text=document.getElementById("bottomRowText");
    let check = JSON.parse(this.responseText);

    link_to_view.classList.add("hidden");
    link_to_view.classList.remove("fakebutton");
    middle_text.classList.add("hidden");
    bottom_text.classList.add("hidden");

    if(check.length!==0 && link_to_view.classList.contains("hidden"))
    {
        let resultColumn= document.getElementById("resultColumn");
        link_to_view.classList.remove("hidden");
        link_to_view.classList.add("fakebutton");
        let noResult = document.getElementById("noResult");
        resultColumn.removeChild(noResult);
        //noResult.classList.add("hidden");
        middle_text.classList.remove("hidden");
        bottom_text.classList.remove("hidden");
    }

    if(check.length!==0)
    {
        let subjectBox2 = document.createElement('select');
          subjectBox2.classList.add("selecttBox");
        subjectBox2.name = 'subject_id';
        subjectBox2.size = 1;
        subjectBox2.required=true;

        let subjectBox3 = document.createElement('select');
        subjectBox3.name = 'subject_id';
        subjectBox3.classList.add("selecttBox");
        subjectBox3.size = 1;
        subjectBox3.required=true;

        let subjectname = [];
        let subjectid = [];
        for( let subjectCount = 0; subjectCount < check.length; subjectCount ++)
        {
            subjectname.push(check[subjectCount].subjectname);
            subjectid.push(check[subjectCount].subject_id)

        }
        let uniqueName = new Set (subjectname);
        let uniqueId = new Set(subjectid);
        subjectname = [...uniqueName];
        subjectid = [...uniqueId];

        for( let subjectCount = 0; subjectCount < subjectname.length; subjectCount ++)
        {
            let selectOption2 = document.createElement('option');
            selectOption2.value = subjectid[subjectCount];
            selectOption2.innerText = subjectname[subjectCount];
            let selectOption3 = document.createElement('option');
            selectOption3.value = subjectid[subjectCount];
            selectOption3.innerText = subjectname[subjectCount];
            subjectBox2.appendChild(selectOption2);
            subjectBox3.appendChild(selectOption3);

        }

        let editColumn= document.getElementById("editResult");
        let editForm =document.createElement('form');
        editForm.classList.add("mt-2");
        editForm.action="/results/edit";
        editForm.method="GET";
        editColumn.appendChild(editForm);
        subjectBox2.classList.add("mb-3");
        editForm.appendChild(subjectBox2);
        let insertButton2=document.createElement('input');
        insertButton2.type="submit";
        insertButton2.value="Edit Subject Result";
        insertButton2.classList.add("Landingbutton");
        insertButton2.classList.add("insertEditResultButtonMargin");
        editForm.appendChild(insertButton2);



        let viewBySubjectColumn= document.getElementById("middle_result_row");
        let viewBySubjectForm =document.createElement('form');
        viewBySubjectForm.classList.add("mt-2");
        viewBySubjectForm.action="/results/view/subject";
        viewBySubjectForm.method="GET";
        viewBySubjectColumn.appendChild(viewBySubjectForm);
        subjectBox3.classList.add("mb-3");
        viewBySubjectForm.appendChild(subjectBox3);
        let insertButton3=document.createElement('input');
        insertButton3.type="submit";
        insertButton3.value="View Result";
        insertButton3.classList.add("Landingbutton");
        viewBySubjectForm.appendChild(insertButton3);


        var responseHandler3 = function()
    {
    let students = JSON.parse( this.responseText );
    console.log(students.students);
        let studentBox = document.createElement('select');
        studentBox.name = 'student_id';
        studentBox.size = 1;
        studentBox.required=true;
        studentBox.classList.add("selecttBox");
        for( let studentCount = 0; studentCount < students.students.length; studentCount ++)
        {
            let selectOption = document.createElement('option');
            selectOption.value = students.students[studentCount].student_id;
            selectOption.innerText = students.students[studentCount].name;
            console.log(students.students[studentCount].name);
            studentBox.appendChild(selectOption);
        }

        let viewByStudentColumn= document.getElementById("bottom_result_row");
        let viewByStudentForm =document.createElement('form');
        viewByStudentForm.classList.add("mt-2");
        viewByStudentForm.action="/results/view/student";
        viewByStudentForm.method="GET";
        viewByStudentColumn.appendChild(viewByStudentForm);
        studentBox.classList.add("mb-3");
        viewByStudentForm.appendChild(studentBox);
        let insertStudentButton=document.createElement('input');
        insertStudentButton.type="submit";
        insertStudentButton.value="View Result";
        insertStudentButton.classList.add("Landingbutton");
        viewByStudentForm.appendChild(insertStudentButton);
        console.log("bottom row")



    }
        var request3 = new XMLHttpRequest();

        // listen for the request response
        request3.addEventListener("load", responseHandler3);

        // ready the system by calling open, and specifying the url
        var url3 = "/utility/students";
        request3.open("GET", url3);

        // send the request
    request3.send();

    }

}



var request2 = new XMLHttpRequest();

// listen for the request response
request2.addEventListener("load", responseHandler2);

// ready the system by calling open, and specifying the url
var url2 = "/utility/test";
request2.open("GET", url2);

// send the request
request2.send();
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