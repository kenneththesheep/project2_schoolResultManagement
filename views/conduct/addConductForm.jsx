var React = require("react");

class home extends React.Component {
  render() {

        const studentConduct=this.props.students.map(student=>
        {


            return <div class={"row align-bottom border"}>
            <div class = {"col-1 my-auto"}>
                <p>{student.name}</p>
            </div>
            <div class={"col-2 my-auto text-center "}>
            <span>Select Conduct Grade</span>
            </div>
            <div class={"col-2 my-auto text-center "}>
                <select name = "conductGrade" id = {student.student_id} size="1" required>
                    <option value ="">NA</option>
                    <option value ="Excellent">Excellent</option>
                    <option value ="Very Good">Very Good</option>
                    <option value ="Good">Good</option>
                    <option value ="Fair">Fair</option>
                    <option value ="Poor">Poor</option>
                </select>
                </div>
                <div class={"col-4 mt-3 text-center"}>
                <textarea name="remarks" id = {student.student_id} rows="10" cols="35" required class="text_area">

                </textarea>
                </div>
                <div class = {"col-3 my-auto "}>
                    <p>Click to select recommended remarks</p>
                    <select name = "recommended_text" size="3" class = "recommendedList" size = "1">
                    <option value ="is nice">is nice.</option>
                    <option value ="is a good student.">is a good student.</option>
                    <option value ="has a pleasant smile.">has a pleasant smile.</option>
                    <option value ="is hardworking.">is hardworking.</option>
                    <option value ="works well with his/her peers.">works well with his/her peers.</option>
                    <option value ="needs to be careful.">Needs to be careful.</option>
                </select>
                </div>



            </div>


        });

    return (
      <html>
        <head />
                    <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"} integrity={"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"} crossorigin={"anonymous"}></link>
                           <link rel={"stylesheet"} href={"/style/style.css"}></link>
        <body>
          <div class={"container mt-3"} style = {{width:"8000px"}}>
          <div class = {"row border"}>
          <div class = {"col-12 text-center"}>
          <h1>Add Conduct Grading for class {this.props.class.classname}</h1>
          </div>
          </div>

          <form  class={"mt-2"} action="/conduct/" method="POST">
          <input  class= "formClass" type="text" name="formClassId" value = {this.props.class.class_id} style={{display:"none"}} ></input>
          {studentConduct}

          <div class = {"row border pt-5"}>
          <div class = {"col-12 text-center"}>
            <input type="submit" value="Submit" style={{width:"25%"}}/>
            </div>
            </div>


            </form>
          </div>
          <script src={'/script/conductForm.js'}></script>
        </body>
      </html>
    );
  }
}

module.exports = home;