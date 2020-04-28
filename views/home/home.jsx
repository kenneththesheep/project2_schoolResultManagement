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
            <h1  class={"mt-3"}>Welcome {this.props.username}</h1>
            </div>
            </div>
            <div class={"row align-bottom mb-5"}>
            <div class={"col-4 mt-5 border"}>
            <h3  class={"mt-3"}>Form class matters</h3>
            <p class ={"mt-5"}><a href={"/formclass/"}>Form class matters</a></p>
            </div>
            <div class={"col-4 mt-5 border"}>
            <h3  class={"mt-3"}>Conduct Grading and HDP</h3>
            <p class ={"mt-5 mb-5 home-action-row"}><a href={"/conduct/"}>Conduct Grading and remarks</a></p>

            </div>

            <div class={"col-4 mt-5 border"}>
            <h3  class={"mt-3"}>Result Management</h3>
            <p class ={"mt-5"}><a href={"#"}>Result Management</a></p>
            </div>
            </div>


          </div>
        </body>
      </html>
    );
  }
}

module.exports = home;