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
            <div class={"row align-bottom"}>
            <div class={"col-12 text-center LandingTitleBox mb-3"}>
            <h1  class={"mt-3 LandingTitleText mb-4 mt-4"} >RESULT MANAGEMENT</h1>
            </div>
            </div>

            <div class = {"row LandingHeaderBox mb-1"}>
                <div class= {"col-3 text-center  pt-3 pb-3 my-auto"}>
                <h3  class={"headerText "}>View/ Assign/ Remove subject to students</h3>
                </div>

                <div class= {"col-3  text-center LandingBoxes pt-3 pb-3"}>
                <h3  class={"headerText"}>Enter Results By Subjects</h3>
                </div>

                <div class= {"col-3  text-center  LandingBoxes pt-3 pb-3"}>

                <h3  class={"headerText"}>Edit Result</h3>
                </div>

                <div class= {"col-3  text-center LandingBoxes pt-3 pb-3"}>
                <h3  class={"headerText"}>View/Print Result</h3>
                </div>

            </div>

            <div class={"row align-bottom mb-5 LandingOptionBox"}>
                <div class={"col-3 pt-3 border "}>
                <div class ={"row"}>
                <div class={"col-12 text-center"}>
                <p class ={"mt-2"}><a href={"/results/viewSubject"} class={"fakebutton"}>View</a></p>
                </div>
                </div>

                <div class ={"row"}>
                <div class={"col-12 text-center"}>
                <p class ={"mt-3"}><a href={"/results/addSubject"}
                class={"fakebutton"}>Assign</a></p>
                </div>
                </div>

                <div class ={"row"}>
                <div class={"col-12 text-center"}>
                <p class ={"mt-3"}><a href={"/results/removeSubject"} class={"fakebutton"}>Remove</a></p>
                </div>
                </div>
            </div>
            <div class={"col-3  LandingBoxes pt-3 pb-3"} id={"addResult"}>



            </div>

            <div class={"col-3  LandingBoxes pt-3 pb-3"} id={"editResult"}>


            </div>

            <div class={"col-3  LandingBoxes pt-3 pb-3"} id={"resultColumn"}>

            <p id = {"noResult"}> No result to View </p>

            <div class = {"row"} id ={"top_result_row"}>
            <div class ={"col-12"}>
            <p class ={"mt-3"}><a href={"/results/view/all"} id = {"link_to_view"}  class={"fakebutton"}>View All Results</a></p>
            </div>
            </div>

            <div class = {"row"} >
            <div class ={"col-12"} id ={"middle_result_row"}>
            <p class ={"mt-2"} id={"middleRowText"}>View By subject</p>

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