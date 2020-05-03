var React = require("react");
var DefaultLayout = require('../layout/navigation')
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
                      <DefaultLayout title={this.props.title}>
        <div>{this.props.name}</div>
      </DefaultLayout>
        <div class={"container mt-3 longBox"}>
        <div class={"row align-bottom"}>
            <div class={"col-12 text-center LandingTitleBox mb-3"}>
            <h1  class={"mt-3 LandingTitleText mb-4 mt-4"}>Edit Form</h1>
            </div>
            </div>

           <div class = {"row LandingHeaderBox mb-1"}>
                <div class= {"col-12 text-center  pt-3 pb-3 my-auto"}>
                <h3  class={"headerText "}>Select student to edit</h3>
                </div>


            </div>

        <form  class={"mt-2"} action="/conduct/student" method="POST">

            <div class={"row align-bottom mb-3 LandingOptionBox"}>
            <div class={"col-12 pt-5 pb-5 text-center"}>
          <select name = "student" size = "1" class={"mt-3"}>
                {student}
            </select>
        </div>
        </div>

          <div class = {"row"}>
          <div class = {"col-12 text-center"}>
            <input type="submit" value="Submit" style={{width:"25%"}}/>
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