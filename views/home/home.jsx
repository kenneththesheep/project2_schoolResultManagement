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
            <h1  class={"mt-3 LandingTitleText mb-4 mt-4"} >Welcome {this.props.username}</h1>
            </div>
            </div>

            <div class = {"row LandingHeaderBox mb-1"}>
                <div class= {"col-4 text-center  pt-3 pb-3 my-auto"}>
                <h3  class={"headerText "}>Form class matters</h3>
                </div>

                <div class= {"col-4  text-center LandingBoxes pt-3 pb-3"}>
                <h3  class={"headerText"}>Conduct Grading and HDP</h3>
                </div>

                <div class= {"col-4  text-center  LandingBoxes pt-3 pb-3"}>

                <h3  class={"headerText"}>Result Management</h3>
                </div>


            </div>

            <div class={"row align-bottom mb-5 LandingOptionBox"}>
            <div class={"col-4 pt-3  text-center"}>

            <p class ={"mt-3"}><a href={"/formclass/"}
                class={"fakebutton"}>Form class matters</a></p>

            </div>

             <div class={"col-4  LandingBoxes pt-3 pb-3 text-center"}   >

                <p class ={"mt-3"}><a href={"/conduct/"}
                class={"fakebutton"}>Conduct Grading and HDP</a></p>


            </div>

             <div class={"col-4  LandingBoxes pt-3 pb-3 text-center"}   >

                <p class ={"mt-3"}><a href={"/results/"}
                class={"fakebutton"}>Result Management</a></p>


            </div>

            </div>


          </div>
        </body>
      </html>
    );
  }
}

module.exports = home;