
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
const createNav =()=>{

    let navigation = document.createElement("nav");
    navigation.classList.add("navbar");
    navigation.classList.add("navbar-expand-lg");
    navigation.classList.add("navbar-light");
    navigation.classList.add("bg-light");
    document.body.appendChild(navigation);
    let outDiv = document.createElement("div");
    outDiv.classList.add("collapse");
    outDiv.classList.add("navbar-collapse");
    outDiv.setAttribute("id","navbarNavAltMarkup");
    navigation.appendChild(outDiv);
    let innerDiv = document.createElement("div");
    innerDiv.classList.add("navbar-nav");
    outDiv.appendChild(innerDiv);

    let first_link = document.createElement("a");
    first_link.setAttribute("href", "/home");
    first_link.classList.add("nav-item");
    first_link.classList.add("nav-link");
    first_link.classList.add("active");
    first_link.innerText = "Home";
    innerDiv.appendChild(first_link);

    let second_link = document.createElement("a");
    second_link.setAttribute("href", "/formclass");
    second_link.classList.add("nav-item");
    second_link.classList.add("nav-link");
    second_link.innerText = "Form Class";
    innerDiv.appendChild(second_link);

    let third_link = document.createElement("a");
    third_link.setAttribute("href", "/conduct");
    third_link.classList.add("nav-item");
    third_link.classList.add("nav-link");
    third_link.innerText = "Conduct and HDP";
    innerDiv.appendChild(third_link);

    let fourth_link = document.createElement("a");
    fourth_link.setAttribute("href", "/results");
    fourth_link.classList.add("nav-item");
    fourth_link.classList.add("nav-link");
    fourth_link.innerText = "Result";
    innerDiv.appendChild(fourth_link);

    let last_link = document.createElement("a");
    last_link.setAttribute("href", "/");
    last_link.classList.add("nav-item");
    last_link.classList.add("nav-link");
    last_link.setAttribute("id", "logout");
    last_link.innerText = "Log Out";
    innerDiv.appendChild(last_link);

    const movement = (event)=>{
        console.log("Something");
            document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    }
    let clickyButton = document.getElementById("logout");
    clickyButton.addEventListener("click",movement);
}

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

    createNav();

    let container = document.createElement("div");
    container.classList.add("container");

    container.classList.add("longBox");
    container.classList.add("mt-3");
    document.body.appendChild(container);

    let topRow = document.createElement("div");
    topRow.classList.add("row");
    topRow.classList.add("align-bottom");
    container.appendChild(topRow);

    let topCol = document.createElement("div");
    topCol.classList.add("col-12");
    topCol.classList.add("text-center");
    topCol.classList.add("mb-3");
    topCol.classList.add("LandingTitleBox");
    topRow.appendChild(topCol);

    let header = document.createElement("h1");
    header.classList.add("mt-4");
    header.classList.add("LandingTitleText");
    header.classList.add("mb-4");
    header.innerText = `Conduct Grading/ HDP Page`
    topCol.appendChild(header);

    let subheadingRow = document.createElement("div");
    subheadingRow.classList.add("row");
    subheadingRow.classList.add("LandingHeaderBox");
    subheadingRow.classList.add("mb-1");
    container.appendChild(subheadingRow);

    let subHeadingColumn = document.createElement("div");
    subHeadingColumn.classList.add("col-12");
    subHeadingColumn.classList.add("pt-3");
    subHeadingColumn.classList.add("pb-3");
    subHeadingColumn.classList.add("text-center");
    subheadingRow.appendChild(subHeadingColumn);

    let subHeader = document.createElement("h3");
    subHeader.innerText = "Click here to add remarks and conduct grading.";
    subHeader.classList.add("headerText");
    subHeadingColumn.appendChild(subHeader);
    //bottomCol.appendChild(spanText);

    let bottomRow = document.createElement("div");
    bottomRow.classList.add("row");
    bottomRow.classList.add("align-bottom");
    bottomRow.classList.add("LandingOptionBox")
    bottomRow.classList.add("mb-5");
    container.appendChild(bottomRow);

    let bottomCol = document.createElement("div");
    bottomCol.classList.add("col-12");

    bottomCol.classList.add("text-center");
    bottomCol.classList.add("pt-3");
        bottomCol.classList.add("pb-3");
    bottomRow.appendChild(bottomCol);


    let para = document.createElement("p");
    para.classList.add("mt-3");
    bottomCol.appendChild(para)

    let linkText = document.createElement("a");
    linkText.setAttribute("href", "/conduct/add/");
    linkText.innerText = "Add Conduct Grading and Remarks";
    linkText.classList.add("fakebutton");
    para.appendChild(linkText);

  }
  else
  {
    console.log("Something will happen");
    document.body.innerHTML="";

    createNav();

    let container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("longBox");
    container.classList.add("mt-3");
    document.body.appendChild(container);

    let topRow = document.createElement("div");
    topRow.classList.add("row");
    topRow.classList.add("align-bottom");
    container.appendChild(topRow);


    let topCol = document.createElement("div");
    topCol.classList.add("col-12");
    topCol.classList.add("text-center");
    topCol.classList.add("mb-3");
    topCol.classList.add("LandingTitleBox");
    topRow.appendChild(topCol);

    let header = document.createElement("h1");
    header.classList.add("mt-4");
    header.classList.add("LandingTitleText");
    header.classList.add("mb-4");
    header.innerText = `Conduct Grading/ HDP Page`
    topCol.appendChild(header);

    let subheadingRow = document.createElement("div");
    subheadingRow.classList.add("row");
    subheadingRow.classList.add("LandingHeaderBox");
    subheadingRow.classList.add("mb-1");
    container.appendChild(subheadingRow);

    let subHeadingleftColumn = document.createElement("div");
    subHeadingleftColumn.classList.add("col-6");
    subHeadingleftColumn.classList.add("pt-3");
    subHeadingleftColumn.classList.add("pb-3");
    subHeadingleftColumn.classList.add("text-center");
    subheadingRow.appendChild(subHeadingleftColumn);

    let subHeader = document.createElement("h3");
    subHeader.innerText = "Click here to view remarks and conduct grading.";
    subHeader.classList.add("headerText");
    subHeadingleftColumn.appendChild(subHeader);

    let subHeadingRightColumn = document.createElement("div");
    subHeadingRightColumn.classList.add("col-6");
    subHeadingRightColumn.classList.add("pt-3");
    subHeadingRightColumn.classList.add("pb-3");
    subHeadingRightColumn.classList.add("text-center");
    subHeadingRightColumn.classList.add("LandingBoxes");
    subheadingRow.appendChild(subHeadingRightColumn);

    let subRightHeader = document.createElement("h3");
    subRightHeader.innerText = "Click here to edit remarks and conduct grading.";
    subRightHeader.classList.add("headerText");
    subHeadingRightColumn.appendChild(subRightHeader);


    let bottomRow = document.createElement("div");
    bottomRow.classList.add("row");
    bottomRow.classList.add("align-bottom");
    bottomRow.classList.add("LandingOptionBox")
    bottomRow.classList.add("mb-5");
    container.appendChild(bottomRow);

    let bottomLeftCol = document.createElement("div");
    bottomLeftCol.classList.add("col-6");

    bottomLeftCol.classList.add("text-center");
    bottomLeftCol.classList.add("pt-3");
        bottomLeftCol.classList.add("pb-3");
    bottomRow.appendChild(bottomLeftCol);

    let paraLeft = document.createElement("p");
    paraLeft.classList.add("mt-3");
    bottomLeftCol.appendChild(paraLeft)

    let linkTextLeft = document.createElement("a");
    linkTextLeft.setAttribute("href", "/conduct/view/");
    linkTextLeft.innerText = "View";
    linkTextLeft.classList.add("fakebutton");
    paraLeft.appendChild(linkTextLeft);

   let bottomRightCol = document.createElement("div");
    bottomRightCol.classList.add("col-6");

    bottomRightCol.classList.add("text-center");
    bottomRightCol.classList.add("pt-3");
    bottomRightCol.classList.add("pb-3");
    bottomRightCol.classList.add("LandingBoxes");
    bottomRow.appendChild(bottomRightCol);

    let paraRight = document.createElement("p");
    paraRight.classList.add("mt-3");
    bottomRightCol.appendChild(paraRight)

    let linkTextRight = document.createElement("a");
    linkTextRight.setAttribute("href", "/conduct/select/");
    linkTextRight.innerText = "Edit";
    linkTextRight.classList.add("fakebutton");
    paraRight.appendChild(linkTextRight);



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