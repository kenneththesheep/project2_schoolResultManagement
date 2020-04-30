var React = require("react");

class home extends React.Component {
  render() {
    console.log(this.props.activeStudents);
    console.log(this.props.class_id);
console.log(this.props.activeStudents.length)
      const student=this.props.activeStudents.map((student, index)=>
        {


            return  <div class={"row"}>
            <div class={"col-4"}>
                <p> {student.name}</p>
            </div>
            <div class = {"col-4"}>
                <input  class= "student_id" type="text" name="student_id" value = {student.student_id} style={{display:"none"}} ></input>

            <input  class= "result_id" type="text" name="result_id" value = {student.result_id} style={{display:"none"}} ></input>

                <input  id= "SA1" type="text" name="SA1" placeholder="Enter SA1" required
                            oninvalid="this.setCustomValidity('Enter Valid SA1 Marks Here')"
                            oninput="this.setCustomValidity('')" value={student.sa1}></input>
            </div>
            <div class = {"col-4"}>


                <input  id= "SA2" type="text" name="SA2" placeholder="Enter SA2" required
                            oninvalid="this.setCustomValidity('Enter Valid SA2 Marks Here')"
                            oninput="this.setCustomValidity('')" value={student.sa2}></input>
            </div>
            </div>

        });

    return (
      <html>
        <head />
                    <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"} integrity={"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"} crossorigin={"anonymous"}></link>
                        <link rel={"stylesheet"} href={"/style/style.css"}></link>
        <body>
        <div class={"container mt-3 "}>
        <div class={"row align-bottom mb-5"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>{this.props.activeStudents[0].subjectname}:Data Entry</h1>
            </div>
            </div>
        <div class={"row"}>
            <div class={"col-4"}>
                <h2> Name</h2>
            </div>
            <div class = {"col-4"}>
                <h2>SA1 (45%)</h2>
            </div>
            <div class = {"col-4"}>
                <h2>SA2 (55%) </h2>
            </div>
            </div>
        <form  class={"mt-2"} action="/results/edit" method="POST">
        <input  class= "subject_id" type="text" name="subject_id" value = {this.props.activeStudents[0].subject_id} style={{display:"none"}} ></input>

        <input  class= "class_id" type="text" name="class_id" value = {this.props.class_id} style={{display:"none"}} ></input>
         {student}
          <div class = {"row border pt-5"}>
          <div class = {"col-12 text-center"}>
            <input type="submit" value="Submit" style={{width:"15%"}}/>
            </div>
            </div>
          </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = home;