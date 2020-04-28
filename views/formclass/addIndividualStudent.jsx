var React = require("react");

class home extends React.Component {
  render() {

    return (
      <html>
        <head />
                    <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"} integrity={"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"} crossorigin={"anonymous"}></link>
                           <link rel={"stylesheet"} href={"/style/style.css"}></link>
        <body>
          <div class={"container mt-3 tweetBox"}>
            <div class={"row align-bottom mb-5"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>Add new student:</h1>
            </div>
            </div>
            <form  class={"mt-2"} action="/formclass/student/" method="POST">
            <div class={"row"}>
            <div class={"col-12 mt-2"}>
            <span class={"mt-3"}>Student name: </span>
            <input  id= "name" type="text" name="name" placeholder="Enter Name" required
                            oninvalid="this.setCustomValidity('Enter Valid Name Here')"
                            oninput="this.setCustomValidity('')" class={"input_text"}></input>
            </div>
            </div>

            <div class={"row"}>
            <div class={"col-12 mt-2"}>
            <span class={"mt-3"}>Student gender: </span>
            <input  id= "gender" type="text" name="gender" placeholder="Enter Gender" required
                            oninvalid="this.setCustomValidity('Enter Valid Gender Here')"
                            oninput="this.setCustomValidity('')"></input>
            </div>
            </div>

            <div class={"row"}>
            <div class={"col-12 mt-2"}>
            <span class={"mt-3"}>Student's Contact: </span>
            <input  id= "studentContact" type="text" name="studentContact" placeholder="Enter student contact"
                            oninvalid="this.setCustomValidity('Enter Valid Number Here')"
                            oninput="this.setCustomValidity('')"></input>
            </div>
            </div>

            <div class={"row"}>
            <div class={"col-12 mt-2"}>
            <span class={"mt-3"}>Parent/Guardian Name:</span>
            <input  id= "parentGuardianName" type="text" name="parentGuardianName" placeholder="Enter Parent/Guardian name" required
                            oninvalid="this.setCustomValidity('Enter Valid Name Here')"
                            oninput="this.setCustomValidity('')"></input>
            </div>
            </div>

            <div class={"row"}>
            <div class={"col-12 mt-2"}>
            <span class={"mt-3"}>Parent/Guardian Contact: </span>
            <input  id= "parentGuardianContact" type="text" name="parentGuardianContact" placeholder="Enter Parent/Guardian Contact" required
                            oninvalid="this.setCustomValidity('Enter Valid Number Here')"
                            oninput="this.setCustomValidity('')"></input>
            </div>
            </div>

            <div class={"row"}>
            <div class={"col-12 mt-2"}>
            <span class={"mt-3"}>Parent/Guardian relationship with student: </span>
                        <input  id= "parentGuardianRelationship" type="text" name="parentGuardianRelationship" placeholder="Enter Parent/Guardian Relationship" required
                            oninvalid="this.setCustomValidity('Enter Valid Relationship Here')"
                            oninput="this.setCustomValidity('')"></input>
            </div>
            </div>

            <div class={"row"}>
            <div class={"col-12 mt-2"}>
            <span class={"mt-3"}>CCA: </span>
            <input  id= "cca" type="text" name="cca" placeholder="Enter cca" required
                            oninvalid="this.setCustomValidity('Enter Valid cca Here')"
                            oninput="this.setCustomValidity('')"></input>
            </div>
            </div>

            <div class={"row"}>

             <div class={"col-12 mt-2 text-center"}>

                        <input type="submit" value="Add" style={{width:"50%"}}/>

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