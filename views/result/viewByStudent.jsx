var React = require("react");
var DefaultLayout = require('../layout/navigation')
class home extends React.Component {
  render() {
console.log(this.props.class.length);
let insertStringArray = [];



      const student=this.props.class.map((student, index)=>
        {


            return <div class={"row"}>



                <div class = {"col-3 border-right"}>
                    <p>{student.subjectname}</p>
                </div>
                <div class = {"col-3 border-right"}>
                    <p>{student.sa1}</p>
                </div>
                <div class = {"col-3 border-right"}>
                    <p>{student.sa2}</p>
                </div>
                <div class = {"col-3 "}>
                    <p>{Math.floor(student.overall)}</p>
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
        <div class={"container mt-3 border"}>
        <div class={"row align-bottom mb-1"}>
            <div class={"col-12"}>
            <h5  class={"mt-3"}>Name: {this.props.class[0].name}</h5>
            </div>
            </div>
            <div class={"row align-bottom mb-5"}>
            <div class={"col-12 "}>
            <h5  class={"mt-3"}>Class: {this.props.class[0].classname}</h5>
            </div>
            </div>

        <div class ={"row"}>

            <div class = {"col-3 border"}>
            <h4>Subject Name</h4>
            </div>
            <div class = {"col-3 border"}>
            <h4>SA1</h4>
            </div>
                        <div class = {"col-3 border"}>
            <h4>SA2</h4>
            </div>
            <div class = {"col-3 border"}>
            <h4>Overall</h4>
            </div>
        </div>
        {student}
         </div>


        </body>
      </html>
    );
  }
}

module.exports = home;