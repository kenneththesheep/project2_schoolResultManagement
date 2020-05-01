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
          <div class={"container mt-3 longBox"}>
            <div class={"row align-bottom mb-5"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>Welcome</h1>
            </div>
            </div>
            <div class={"row align-bottom mb-5"}>
            <div class={"col-3 mt-5 border"}>
            <h3  class={"mt-3"}>View/ Assign/ Remove subject to students</h3>
            <p class ={"mt-5"}><a href={"/results/viewSubject"} class={"fakebutton"}>View</a></p>
            <p class ={"mt-5"}><a href={"/results/addSubject"} class={"fakebutton"}>Assign</a></p>
            <p class ={"mt-5"}><a href={"/results/removeSubject"} class={"fakebutton"}>Remove</a></p>
            </div>
            <div class={"col-3 mt-5 border"} id={"addResult"}>
            <h3  class={"mt-3"}>Enter Results By Subjects</h3>


            </div>

            <div class={"col-3 mt-5 border"} id={"editResult"}>
            <h3  class={"mt-3"}>Edit Result</h3>

            </div>

            <div class={"col-3 mt-5 border"}>
            <h3  class={"mt-3"}>View/Print Result</h3>
            <p id = {"noResult"}> No result to View </p>

            <div class = {"row"} id ={"top_result_row"}>
            <div class ={"col-12"}>
            <p class ={"mt-5"}><a href={"/results/view/all"} id = {"link_to_view"}  class={"fakebutton"}>View All Results</a></p>
            </div>
            </div>

            <div class = {"row"} >
            <div class ={"col-12"} id ={"middle_result_row"}>
            <p class ={"mt-5"} id={"middleRowText"}>View By subject</p>

            </div>
            </div>

            <div class = {"row"} >
            <div class ={"col-12"}  id ={"bottom_result_row"}>
            <p class ={"mt-5 " } id={"bottomRowText"}>View By student</p>
            </div>
            </div>



            </div>
            </div>


          </div>
          <script src={"/script/viewAllSubject.js"}></script>
        </body>
      </html>
    );
  }
}

module.exports = home;