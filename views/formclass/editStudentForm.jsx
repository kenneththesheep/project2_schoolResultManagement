var React = require("react");
var DefaultLayout = require('../layout/navigation')

class home extends React.Component {
  render() {
    const edit_url= '/formclass/student/'+ this.props.student.student.id  +'?_method=put';
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
            <h1  class={"mt-3 LandingTitleText mb-4 mt-4"} >Edit exisiting student:</h1>
            </div>
            </div>
            <form  class={"mt-2"} action={edit_url} method="POST">

            <div class={"row align-bottom LandingOptionBox"}>
            <div class={"col-7"}>
            <h4 class={"pt-3 pb-3"}>Student name: </h4>
            </div>
            <div class={"col-5 text-center "}>
            <input  id= "name" type="text" name="name" placeholder="Enter Name" required
                            oninvalid="this.setCustomValidity('Enter Valid Name Here')"
                            oninput="this.setCustomValidity('')" class={"input_text mt-3"}  value={this.props.student.student.name}></input>
            </div>
            </div>

            <div class={"row align-bottom LandingOptionBox"}>
            <div class={"col-7"}>
            <h4 class={"pt-3 pb-3"}>Student gender: </h4>
            </div>
            <div class={"col-5 text-center "}>
           <input  id= "gender" type="text" name="gender" placeholder="Enter Gender" required
                            oninvalid="this.setCustomValidity('Enter Valid Gender Here')"
                            oninput="this.setCustomValidity('')"  class={"input_text mt-3"} value={this.props.student.student.gender}></input>
            </div>
            </div>

            <div class={"row align-bottom LandingOptionBox"}>
            <div class={"col-7"}>
            <h4 class={"pt-3 pb-3"}>Student's Contact:</h4>
            </div>
            <div class={"col-5 text-center "}>
            <input  id= "studentContact" type="text" name="studentContact" placeholder="Enter student contact"
                            oninvalid="this.setCustomValidity('Enter Valid Number Here')"
                            oninput="this.setCustomValidity('')" class={"input_text mt-3"} value={this.props.student.student.personalcontact}></input>
            </div>
            </div>

            <div class={"row align-bottom LandingOptionBox"}>
            <div class={"col-7"}>
            <h4 class={"pt-3 pb-3"}>Parent/Guardian Name:</h4>
            </div>
            <div class={"col-5 text-center "}>
            <input  id= "parentGuardianName" type="text" name="parentGuardianName" placeholder="Enter Parent/Guardian name" required
                            oninvalid="this.setCustomValidity('Enter Valid Name Here')"
                            oninput="this.setCustomValidity('')" class={"input_text mt-3"}   value={this.props.student.student.parentguardianname}></input>
            </div>
            </div>

            <div class={"row align-bottom LandingOptionBox"}>
            <div class={"col-7"}>
            <h4 class={"pt-3 pb-3"}>Parent/Guardian Contact:</h4>
            </div>
            <div class={"col-5 text-center "}>
            <input  id= "parentGuardianContact" type="text" name="parentGuardianContact" placeholder="Enter Parent/Guardian Contact" required
                            oninvalid="this.setCustomValidity('Enter Valid Number Here')"
                            oninput="this.setCustomValidity('')"  class={"input_text mt-3" }  value={this.props.student.student.parentguardiannumber}></input>
            </div>
            </div>

            <div class={"row align-bottom LandingOptionBox"}>
            <div class={"col-7"}>
            <h4 class={"pt-3 pb-3"}>Parent/Guardian relationship with student: </h4>
            </div>
            <div class={"col-5 text-center "}>
                       <input  id= "parentGuardianRelationship" type="text" name="parentGuardianRelationship" placeholder="Enter Parent/Guardian Relationship" required
                            oninvalid="this.setCustomValidity('Enter Valid Relationship Here')"
                            oninput="this.setCustomValidity('')"  class={"input_text mt-3"}  value={this.props.student.student.relationship}></input>
            </div>
            </div>

            <div class={"row align-bottom LandingOptionBox"}>
            <div class={"col-7"}>
            <h4 class={"pt-3 pb-3"}>CCA: </h4>
            </div>
            <div class={"col-5 text-center "}>
            <input  id= "cca" type="text" name="cca" placeholder="Enter cca" required
                            oninvalid="this.setCustomValidity('Enter Valid cca Here')"
                            oninput="this.setCustomValidity('')"   class={"input_text mt-3"}  value={this.props.student.student.cca}></input>
            </div>
            </div>


            <div class={"row"}>

             <div class={"col-12 mt-2 text-center"}>

                        <input type="submit" value="Edit" style={{width:"50%"}}/>

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