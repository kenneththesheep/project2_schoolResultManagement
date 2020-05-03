var React = require("react");
var DefaultLayout = require('../layout/navigation')

class home extends React.Component {
  render() {

      const conduct=this.props.conduct.map((conduct, index)=>
        {
            const editConductUrl = '/conduct/' + conduct.conduct_id +"/edit/";

            return <div class= {"row mx-auto"}>
            <div class = {"col-2 border"}>
                <p class={"mt-2"}>{this.props.students[index].name}</p>
            </div>
           <div class = {"col-2 border"}>
                <p class={"mt-2"}>{conduct.conductgrade}</p>
            </div>
            <div class = {"col-6 border"}>
                <p class={"mt-2"}>{conduct.remark}</p>
            </div>

            <div class = {"col-2 border "}>
                <form  class={"mt-2"} action={editConductUrl} method="GET">
                        <input type="submit" value="Edit"/>
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
        <div class={"container mt-3"}>
        <div class={"row align-bottom"}>
            <div class={"col-12 LandingTitleBox mb-3 text-center"}>
            <h1  class={"mt-3 LandingTitleText mb-4 mt-4"} >Class {this.props.class.classname} Conduct Grading and Remarks</h1>
            </div>
            </div>
            <div class = {"row LandingHeaderBox mb-1 pl-2"}>

            <div class = {"col-2 text-center "}>
                <p class={"mt-2"}>Name</p>
            </div>
           <div class = {"col-2 "}>
                <p class={"mt-2"}>Conduct Grade</p>
            </div>
            <div class = {"col-6 text-center"}>
                <p class={"mt-2"}>Remark</p>
            </div>

            <div class = {"col-2  "}>
                  <p class={"mt-2"}>Action</p>
            </div>
            </div>
        </div>
          <div class={"container mt-3 horizontal-scroll-wrapper squares detailed-box border"} >


                {conduct}




          </div>
        <div class={"container mt-3 longBox"}>
        <div class={"row"}>
            <div class = {"col-3 border mx-auto text-center"}>
                <button id={"downloadConduct"}>Download</button>
            </div>

        </div>
        </div>
        <script src = {"/script/downloadConduct.js"}></script>
        </body>
      </html>
    );
  }
}

module.exports = home;