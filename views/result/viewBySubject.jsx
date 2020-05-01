var React = require("react");
var DefaultLayout = require('../layout/navigation')
class home extends React.Component {
  render() {
console.log(this.props.class.length);
let insertStringArray = [];



      const student=this.props.class.map((student, index)=>
        {


            return <div class={"row"}>

                <div class = {"col-3 border"}><p>{this.props.class[index].name}</p></div>

                <div class = {"col-3 border"}>
                    <p>{student.subjectname}</p>
                </div>
                <div class = {"col-2 border"}>
                    <p>{student.sa1}</p>
                </div>
                <div class = {"col-2 border"}>
                    <p>{student.sa2}</p>
                </div>
                <div class = {"col-2 border"}>
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
        <div class={"container mt-3 "}>
        <div class={"row align-bottom mb-5"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>{this.props.class[0].classname} Results</h1>
            </div>
            </div>
        </div>
                <div class ={"container"}>
        <div class ={"row"}>
            <div class = {"col-3 border"}>
            <h4>Student Name</h4>
            </div>
            <div class = {"col-3 border"}>
            <h4>Subject Name</h4>
            </div>
            <div class = {"col-2 border"}>
            <h4>SA1</h4>
            </div>
                        <div class = {"col-2 border"}>
            <h4>SA2</h4>
            </div>
            <div class = {"col-2 border"}>
            <h4>Overall</h4>
            </div>
        </div>

        {student}
        </div>
                <div class={"container mt-3 mb-5"}>
        <div class={"row"}>
            <div class = {"col-3  mx-auto text-center"}>
                <button id = 'downloadBySubject'>Download</button>
            </div>

        </div>
        </div>
        <script src = {"/script/downloadBySubject.js"} ></script>

        </body>
      </html>
    );
  }
}

module.exports = home;