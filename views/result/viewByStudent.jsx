var React = require("react");
var DefaultLayout = require('../layout/navigation')
class home extends React.Component {
  render() {
console.log(this.props.class.length);
let insertStringArray = [];
console.log(this.props.class);
let promotionStatus = "Pending";
let totalOverall = 0;
let averageOverall = 0;
let failEnglish = false;
let passSubject = 0;
let passStatus="Fail";
for(let count = 0; count < this.props.class.length; count++)
{

    totalOverall += parseInt (this.props.class[count].overall);
    if(this.props.class[count].subjectname==='English' && parseInt( this.props.class[count].overall ) < 50)
    {
        failEnglish = true;
    }
    if (parseInt(this.props.class[count].overall) > 49)
    {
        passSubject ++;
    }

}
console.log(totalOverall);
averageOverall = totalOverall/ this.props.class.length;
console.log("AVerage overall is "+averageOverall);

if ((passSubject > 2||(passSubject > 0 && failEnglish))&&averageOverall>49)
{
    passStatus = "Pass";
    promotionStatus = "Promoted";
}

      const student=this.props.class.map((student, index)=>
        {


            return <div class={"row"}>



                <div class = {"col-3 border-right"}>
                    <p class={"subject"}>{student.subjectname}</p>
                </div>
                <div class = {"col-3 border-right"}>
                    <p class={"sa1"}>{student.sa1}</p>
                </div>
                <div class = {"col-3 border-right"}>
                    <p class={"sa2"}>{student.sa2}</p>
                </div>
                <div class = {"col-3 "}>
                    <p class={"overall"}>{Math.floor(student.overall)}</p>
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
            <h5  class={"mt-3"} id={"student_name"}>Name: {this.props.class[0].name}</h5>
            </div>
            </div>
            <div class={"row align-bottom mb-5"}>
            <div class={"col-12 "}>
            <h5  class={"mt-3"} id={"class"}>Class: {this.props.class[0].classname}</h5>
            </div>
            </div>

        <div class ={"row"}>

            <div class = {"col-3 border"}>
            <h4>Subject</h4>
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
        <div class = {"row border pt-4"}>
        <div class= {"col-12"}>
            <p id={"conductgrade"}>Conduct Grade: {this.props.class[0].conductgrade}</p>
            <p id={"remark"}>Remark: {this.props.class[0].remark}</p>
            <p id={"overallPercent"}>Overall Percentage : {averageOverall} %</p>
            <p id={"passStatus"}>(Pass/Fail): {passStatus}</p>
            <p id ={"promotionStatus"}>Promotion Status: {promotionStatus}</p>
        </div>
        </div>

         </div>
                         <div class={"container mt-3 mb-5"}>
        <div class={"row"}>
            <div class = {"col-3  mx-auto text-center"}>
                 <button id ="individualStudentReport">Download</button>
            </div>

        </div>
        </div>

         <script src={"/script/individualStudentResultDownload.js"}></script>

        </body>
      </html>
    );
  }
}

module.exports = home;