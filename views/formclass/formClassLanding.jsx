var React = require("react");
var DefaultLayout = require('../layout/navigation')
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
                        <link rel={"stylesheet"} href={"/style/style.css"}></link>
        <body>
                      <DefaultLayout title={this.props.title}>
        <div>{this.props.name}</div>
      </DefaultLayout>
          <div class={"container mt-3  longBox "}>
            <div class={"row align-bottom"}>
            <div class={"col-12 text-center LandingTitleBox mb-3"}>
            <h1  class={"mt-3 LandingTitleText mb-4 mt-4"}>Welcome to {this.props.class[0].classname} matters</h1>
            </div>
            </div>


           <div class = {"row LandingHeaderBox mb-1"}>
                <div class= {"col-4 text-center  pt-3 pb-3 my-auto"}>
                <h3  class={"headerText "}>View All Students</h3>
                </div>

                <div class= {"col-4  text-center LandingBoxes pt-3 pb-3"}>
                <h3  class={"headerText"}>View Individual Student</h3>
                </div>

                <div class= {"col-4  text-center  LandingBoxes pt-3 pb-3"}>

                <h3  class={"headerText"}>Add New Student</h3>
                </div>


            </div>

            <div class={"row align-bottom mb-5 LandingOptionBox"}>
            <div class={"col-4 pt-3  text-center"}>
            <p class ={"mt-3"}><a class={"fakebutton"} href={"/formclass/all"}>View all students</a></p>
            </div>

            <div class={"col-4  LandingBoxes pt-3 pb-3 text-center"}>


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

            <div class={"col-4  LandingBoxes pt-3 pb-3 text-center"}>

            <p class ={"mt-3"}><a class={"fakebutton"} href={"/formclass/student/add"}>Add New Student</a></p>
            </div>
            </div>


          </div>
        </body>
      </html>
    );
  }
}

module.exports = home;