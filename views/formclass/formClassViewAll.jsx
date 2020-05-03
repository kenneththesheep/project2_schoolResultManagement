var React = require("react");
var DefaultLayout = require('../layout/navigation')

class home extends React.Component {
  render() {

      const student=this.props.students.map(student=>
        {
            const editStudentUrl = '/formclass/student/' + student.student_id +"/edit/";
            const deleteStudentUrl = '/formclass/student/' + student.student_id+ "?_method=delete";
            return <div class= {"row mx-auto"}>
            <div class = {"col-2 border"}>
                <p class={"mt-2"}>{student.name}</p>
            </div>
           <div class = {"col-1 border"}>
                <p class={"mt-2"}>{student.gender}</p>
            </div>
            <div class = {"col-1 border"}>
                <p class={"mt-2"}>{student.personalcontact}</p>
            </div>
            <div class = {"col-1 border"}>
                <p class={"mt-2"}>{student.parentguardianname}</p>
            </div>
            <div class = {"col-2 border"}>
                <p class={"mt-2"}>{student.parentguardiannumber}</p>
            </div>
            <div class = {"col-1 border"}>
                <p class={"mt-2"}>{student.relationship}</p>
            </div>
            <div class = {"col-1 border"}>
                <p class={"mt-2"}>{student.cca}</p>
            </div>
            <div class = {"col-1 border "}>
                <form  class={"mt-2"} action={editStudentUrl} method="GET">
                        <input type="submit" value="Edit"/>
                </form>
            </div>
            <div class = {"col-1 border "}>
                <form  class={"mt-2"} action={deleteStudentUrl} method="POST">
                        <input type="submit" value="Delete"/>
                </form>
            </div>
            </div>

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
        <div class={"container mt-3 "}>
        <div class={"row align-bottom"}>
            <div class={"col-12 LandingTitleBox mb-3 text-center"}>
            <h1  class={"mt-3 LandingTitleText mb-4 mt-4"}>Class {this.props.class[0].classname} Details</h1>
            </div>
            </div>
                        <div class = {"row LandingHeaderBox mb-1 pl-2"}>

            <div class = {"col-2 text-center my-auto"}>
                <p class={"mt-2"}>Name</p>
            </div>
           <div class = {"col-1 my-auto"}>
                <p class={"mt-2"}>Gender</p>
            </div>
            <div class = {"col-1 text-center"}>
                <p class={"mt-2"}>Personal Contact</p>
            </div>
            <div class = {"col-1 text-center"}>
                <p class={"mt-2"}>Parent/ Guardian Name</p>
            </div>
            <div class = {"col-2 my-auto text-center"}>
                <p class={"mt-2"}>Parent/ Guardian Contact</p>
            </div>
            <div class = {"col-1   my-auto"} style={{margin:0, padding:0}}>
                <p class={"mt-2"}>Child's</p>
            </div>
            <div class = {"col-1   my-auto"}>
                <p class={"mt-2"}>CCA</p>
            </div>
            <div class = {"col-2  my-auto"}>
                <p class={"mt-2 ml-3"}>Action</p>
            </div>

            </div>
        </div>
          <div class={"container mt-3 horizontal-scroll-wrapper squares detailed-box border"} >


                {student}




          </div>
           <div class={"container mt-3 "}>
        <div class={"row"}>
            <div class = {"col-3 mx-auto text-center"}>
                <button id={"downloadFormClass"}>Download</button>
            </div>

        </div>
        </div>
        <script src = {"/script/downloadFormMatter.js"}></script>
        </body>
      </html>
    );
  }
}

module.exports = home;