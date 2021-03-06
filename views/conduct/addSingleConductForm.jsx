var React = require("react");
var DefaultLayout = require('../layout/navigation')

class home extends React.Component {
  render() {



    return (
      <html>
        <head />
                    <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"} integrity={"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"} crossorigin={"anonymous"}></link>
                           <link rel={"stylesheet"} href={"/style/style.css"}></link>
        <body>
                      <DefaultLayout title={this.props.title}>
        <div>{this.props.name}</div>
      </DefaultLayout>
          <div class={"container mt-3 pb-3"} style = {{width:"8000px"}}>
          <div class = {"row"}>
          <div class = {"col-12 text-center LandingTitleBox mb-3"}>
          <h1 class={"mt-3 LandingTitleText mb-4 mt-4"}>Add Conduct Grading student {this.props.student_id}</h1>
          </div>
          </div>

          <form  class={"mt-2"} action="/conduct/single" method="POST">

          <div class={"row align-bottom border mt-2 LandingOptionBox"}>

<div class={"col-4 my-auto text-center "}>
            <p>Select Conduct Grade</p>
                <select name = "conductGrade" id = {this.props.student_id} size="1" required>
                    <option value ="">NA</option>
                    <option value ="Excellent">Excellent</option>
                    <option value ="Very Good">Very Good</option>
                    <option value ="Good">Good</option>
                    <option value ="Fair">Fair</option>
                    <option value ="Poor">Poor</option>
                </select>
                </div>
                <div class={"col-4 mt-3 text-center"}>
                <textarea name="remarks" id = {this.props.student_id} rows="10" cols="35" required class="text_area">

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


                <input name = {"student_id"} value = {this.props.student_id} style={{display:"none"}}></input>
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