var React = require("react");

class error extends React.Component {
  render() {
    console.log(this.props);
    return (
      <html>
        <head />
                    <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"} integrity={"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"} crossorigin={"anonymous"}></link>
                        <link rel={"stylesheet"} href={"style/style.css"}></link>
        <body>
          <div class={"container mt-3 tweetBox"}>

           <div class={"row"}>
                <div class = {"col-12"}>
                    <h4>Error Message: {this.props.errorMessage} </h4>
                    <p><a href = {"/"}>Click Here to return back to login page.</a></p>
                </div>
            </div>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = error;