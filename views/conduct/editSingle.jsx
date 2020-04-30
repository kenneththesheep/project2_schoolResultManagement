var React = require("react");
var DefaultLayout = require('../layout/navigation')
class home extends React.Component {
  render() {

const editUrl = '/conduct/'+ this.props.conduct.id+"?_method=put";

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
            <div class={"row"}>
                <div class={"col-12"}>
                    <h1>Edit Conduct for {this.props.students[0].name}</h1>
                </div>
            </div>
            <form  class={"mt-2"} action={editUrl} method="POST">
          <input  class= "formClass" type="text" name="formClassId" value = {this.props.conduct.id} style={{display:"none"}} ></input>

          <div class={"row align-bottom border"}>
            <div class = {"col-1 my-auto"}>
                <p>{this.props.students[0].name}</p>
            </div>
            <div class={"col-2 my-auto text-center "}>
            <span>Select Conduct Grade</span>
            </div>
            <div class={"col-2 my-auto text-center "}>
                <select name = "conductGrade" id = {this.props.students[0].student_id} size="1" required value= {this.props.conduct.conductgrade}>
                    <option value ="">NA</option>
                    <option value ="Excellent">Excellent</option>
                    <option value ="Very Good">Very Good</option>
                    <option value ="Good">Good</option>
                    <option value ="Fair">Fair</option>
                    <option value ="Poor">Poor</option>
                </select>
                </div>
                <div class={"col-4 mt-3 text-center"}>
                <textarea name="remarks" id = {this.props.students[0].student_id} rows="10" cols="35" required class="text_area" value = {this.props.conduct.remark}>

                </textarea>
                </div>
                <div class = {"col-3 my-auto "}>
                    <p>Click to select recommended remarks</p>
                    <select name = "recommended_text" size="3" class = "recommendedList" size = "1">
                    <option value ="is nice">is nice.</option>
                    <option value ="is a good student.">is a good student.</option>
                    <option value ="has a pleasant smile.">has a pleasant smile.</option>
                    <option value ="is hardworking.">is hardworking.</option>
                    <option value ="works well with his/her peers.">works well with his/her peers.</option>
                    <option value ="needs to be careful.">Needs to be careful.</option>
                </select>
                </div>



            </div>


          <div class = {"row border pt-5"}>
          <div class = {"col-12 text-center"}>
            <input type="submit" value="Submit" style={{width:"25%"}}/>
            </div>
            </div>


            </form>


          </div>
          <script src={'/script/conductForm.js'}></script>
        </body>
      </html>
    );
  }
}

module.exports = home;