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
          <div class={"container mt-3 "}>
            <div class={"row"}>
                <div class={"col-12"}>
                    <h1>Wait</h1>
                </div>
            </div>



          </div>
          <script src={"/script/conductScript.js"}></script>
        </body>
      </html>
    );
  }
}

module.exports = home;