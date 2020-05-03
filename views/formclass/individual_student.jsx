var React = require("react");
var DefaultLayout = require('../layout/navigation')

class home extends React.Component {
  render() {
    const editStudentUrl = '/formclass/student/' + this.props.student.id +"/edit/";
    const deleteStudentUrl = '/formclass/student/' + this.props.student.id+ "?_method=delete";
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
            <h1  class={"mt-3 LandingTitleText mb-4 mt-4"} >Student Detail</h1>
            </div>
            </div>

            <div class={"row align-bottom LandingOptionBox"}>
            <div class={"col-7"}>
            <h4 class={"mt-3"}>Student name: </h4>
            </div>
            <div class={"col-5 LandingBoxes"}>
            <h4 class={"mt-3"}>{this.props.student.name}</h4>
            </div>
            </div>

            <div class={"row align-bottom LandingOptionBox"}>
            <div class={"col-7"}>
            <h4 class={"mt-3"}>Student gender: </h4>
            </div>
            <div class={"col-5 LandingBoxes"}>
            <h4 class={"mt-3"}>{this.props.student.gender}</h4>
            </div>
            </div>

            <div class={"row align-bottom LandingOptionBox"}>
            <div class={"col-7"}>
            <h4 class={"mt-3"}>Student Contact: </h4>
            </div>
            <div class={"col-5 LandingBoxes"}>
            <h4 class={"mt-3"}>{this.props.student.personalcontact}</h4>
            </div>
            </div>

            <div class={"row align-bottom LandingOptionBox"}>
            <div class={"col-7"}>
            <h4 class={"mt-3"}>Parent/Guardian Name: </h4>
            </div>
            <div class={"col-5 LandingBoxes"}>
            <h4 class={"mt-3"}>{this.props.student.parentguardianname}</h4>
            </div>
            </div>

            <div class={"row align-bottom LandingOptionBox"}>
            <div class={"col-7"}>
            <h4 class={"mt-3"}>Parent/Guardian Contact: </h4>
            </div>
            <div class={"col-5 LandingBoxes"}>
            <h4 class={"mt-3"}>{this.props.student.parentguardiannumber}</h4>
            </div>
            </div>

            <div class={"row align-bottom LandingOptionBox"}>
            <div class={"col-7"}>
            <h4 class={"mt-3"}>Parent/Guadrian relationship with student: </h4>
            </div>
            <div class={"col-5 LandingBoxes"}>
            <h4 class={"mt-3"}>{this.props.student.relationship}</h4>
            </div>
            </div>
            <div class={"row align-bottom LandingOptionBox"}>
            <div class={"col-7"}>
            <h4 class={"mt-3"}>CCA: </h4>
            </div>
            <div class={"col-5 LandingBoxes"}>
            <h4 class={"mt-3"}>{this.props.student.cca}</h4>
            </div>
            </div>


            <div class={"row"}>
            <div class={"col-6 mt-2 text-center"}>
               <form  class={"mt-2"} action={editStudentUrl} method="GET">
                        <input type="submit" value="Edit" style={{width:"50%"}}/>
                </form>
            </div>
             <div class={"col-6 mt-2 text-center"}>
                            <form  class={"mt-2"} action={deleteStudentUrl} method="POST">
                        <input type="submit" value="Delete" style={{width:"50%"}}/>
                </form>
                </div>
            </div>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = home;