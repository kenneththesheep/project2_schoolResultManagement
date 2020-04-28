var React = require("react");

class home extends React.Component {
  render() {

      const student=this.props.student.map((student, index)=>
        {
            const editStudentUrl = '/conduct/student/' + student.student_id ;

            return <option value = {student.student_id}>{student.name}</option>

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
            <h1  class={"mt-3"}>Select student to edit</h1>
            </div>
            </div>
        </div>
        <form  class={"mt-2"} action="/conduct/student" method="POST">

        <div class = {"row border pt-5"}>
          <div class = {"col-12 text-center"}>
          <select name = "student" size = "1">
                {student}
            </select>
        </div>
        </div>

          <div class = {"row border pt-5"}>
          <div class = {"col-12 text-center"}>
            <input type="submit" value="Submit" style={{width:"25%"}}/>
            </div>
            </div>
          </form>

        </body>
      </html>
    );
  }
}

module.exports = home;