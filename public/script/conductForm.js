console.log("in the form");


function something(event){
    console.log("changed");
    console.log( event.target);
    console.log(event.target.id);
    console.log(event.target.value);
    let selectedTextBoxIndex = parseInt(event.target.id);
    var textbox = document.querySelectorAll(".text_area");
    for (var j = 0; j < textbox.length;j++){
        console.log(j);
        if(j === selectedTextBoxIndex)
         textbox[j].value += event.target.value;
    }
}






var select = document.querySelectorAll('.recommendedList');
for( var i=0; i<select.length; i++){
  //var select = select[i];
  //console.log('something');
  select[i].setAttribute("id",i);
  select[i].addEventListener("change", something);
}