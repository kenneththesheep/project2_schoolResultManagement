var React = require("react");

class home extends React.Component {
  render() {

      const student=this.props.students.map(student=>
        {

            return <div class= {"row"}>
            <div class = {"col-2 border"}>
                <p>{student.name}</p>
            </div>
           <div class = {"col-1 border"}>
                <p>{student.gender}</p>
            </div>
            <div class = {"col-2 border"}>
                <p>{student.personalcontact}</p>
            </div>
            <div class = {"col-2 border"}>
                <p>{student.parentguardianname}</p>
            </div>
            <div class = {"col-2 border"}>
                <p>{student.parentguardiannumber}</p>
            </div>
            <div class = {"col-1 border"}>
                <p>{student.relationship}</p>
            </div>
            <div class = {"col-1 border"}>
                <p>{student.cca}</p>
            </div>
            </div>

        });

    return (
      <html>
        <head />
                    <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"} integrity={"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"} crossorigin={"anonymous"}></link>
                        <link rel={"stylesheet"} href={"../style/style.css"}></link>
        <body>
          <div class={"container mt-3 horizontal-scroll-wrapper squares detailed-box"} style= {{width:"200%"}}>
            <div class={"row align-bottom mb-5"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>Class {this.props.class[0].classname} Details</h1>
            </div>
            </div>
            <div class= {"row"}>
            <div class = {"col-10"}>
                {student}
            </div>
            </div>



          </div>

        </body>
      </html>
    );
  }
}

module.exports = home;