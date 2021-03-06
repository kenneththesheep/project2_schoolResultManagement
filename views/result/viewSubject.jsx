var React = require("react");
var DefaultLayout = require('../layout/navigation')

class home extends React.Component {
  render() {

      const student=this.props.students.map((student, index)=>
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
                      <DefaultLayout title={this.props.title}>
        <div>{this.props.name}</div>
      </DefaultLayout>
        <div class={"container mt-2 longBox"}>
        <div class={"row align-bottom mb-1"}>
            <div class={"col-12 mt-2 LandingTitleBox text-center"}>
            <h1  class={"mt-3 LandingTitleText mb-4 mt-4"}>View Subject:</h1>
            </div>
            </div>

            <div class = {"row LandingHeaderBox mb-1"}>
                <div class= {"col-12 text-center  pt-3 pb-3 my-auto"}>
                <h3  class={"headerText "}>Select Student to view subject taken: </h3>
                </div>


            </div>

        <div class = {"row  pt-5"}>
          <div class = {"col-6 text-center"}>
          <select name = "student" size = "1" id = {"select"}>
                {student}
            </select>
        </div>
        <div class = {"col-6 text-center"} id={"subject"}>

        </div>
        </div>
                </div>

          <script src = {"/script/viewSubject.js"}></script>
        </body>
      </html>
    );
  }
}

module.exports = home;