var React = require("react");

class home extends React.Component {
  render() {

      const student=this.props.students.map(student=>
        {

            return <option value={student.id}>{student.name}</option>

        });

    return (
      <html>
        <head />
                    <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"} integrity={"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"} crossorigin={"anonymous"}></link>
                        <link rel={"stylesheet"} href={"style/style.css"}></link>
        <body>
          <div class={"container mt-3 tweetBox"}>
            <div class={"row align-bottom mb-5"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>Welcome to {this.props.class[0].classname} matters</h1>
            </div>
            </div>
            <div class={"row align-bottom mb-5"}>
            <div class={"col-4 mt-5 border"}>
            <h4  class={"mt-3"}>View all students</h4>
            <p class ={"mt-5"}><a href={"/formclass/all"}>View all students</a></p>
            </div>

            <div class={"col-4 mt-5 border"}>
            <h4  class={"mt-3"}>View Individual Student</h4>

            <form method="GET" action="/formclass/student/"  >
            <div class = {"row"}>

            <div class = {"col-6 mt-3 "}>
                    <select id="student" name="student_id">
                    {student}
                    </select>
            </div>
            <div class = {"col-6 text-right mt-3"}>

                    <input type="submit" value="View"></input>
            </div>
            </div>
            </form>
            </div>

            <div class={"col-4 mt-5 border"}>
            <h4  class={"mt-3"}>Add New Student</h4>
            <p class ={"mt-5"}><a href={"/formclass/student/add"}>Add New Student</a></p>
            </div>
            </div>


          </div>
        </body>
      </html>
    );
  }
}

module.exports = home;