var React = require("react");

class home extends React.Component {
  render() {

    return (
      <html>
        <head />
            <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"} integrity={"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"} crossorigin={"anonymous"}></link>
            <link rel={"stylesheet"} href={"/style/style.css"}></link>
        <body>
          <div class={"container mt-3 tweetBox"}>
            <div class={"row align-bottom mb-5"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>Welcome</h1>
            </div>
            </div>
            <div class={"row align-bottom mb-5"}>
            <div class={"col-3 mt-5 border"}>
            <h3  class={"mt-3"}>View/ Assign/ Remove subject to students</h3>
            <p class ={"mt-5"}><a href={"/results/viewSubject"}>View</a></p>
            <p class ={"mt-5"}><a href={"/results/addSubject"}>Assign</a></p>
            <p class ={"mt-5"}><a href={"#"}>Remove</a></p>
            </div>
            <div class={"col-3 mt-5 border"}>
            <h3  class={"mt-3"}>Enter Results By Subjects</h3>
            <p class ={"mt-5 mb-5 home-action-row"}><a href={"#"}>To be replaced by a drop down list</a></p>

            </div>

            <div class={"col-3 mt-5 border"}>
            <h3  class={"mt-3"}>Edit Result</h3>
            <p class ={"mt-5"}><a href={"#"}>Edit Results</a></p>
            </div>

            <div class={"col-3 mt-5 border"}>
            <h3  class={"mt-3"}>View/Print Result</h3>
            <p class ={"mt-5"}><a href={"#"}>View/ Print Results</a></p>
            </div>
            </div>


          </div>
        </body>
      </html>
    );
  }
}

module.exports = home;