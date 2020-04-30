var React = require("react");

class Login extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
                    <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"} integrity={"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"} crossorigin={"anonymous"}></link>
                        <link rel={"stylesheet"} href={"style/style.css"}></link>
        <body>
          <div class={"container mt-3 tweetBox"}>


                        <div class={"row align-bottom mb-5"} >
            <div class={"col-4 text-right"}>
            <image src = {"/img/sheepCoatOfArm.png"} style = {{width : "70%"}} />
            </div>
            <div class={"col-8 my-auto text-left"}>
            <h1  class={"mt-3"}>Login Form</h1>
            </div>
            </div>
           <div class={"row"}>
                <div class = {"col-12"}>
                    <form method="POST" action="/"  style={{textAlign: "Center"}}>
                    <span>Enter Login Name: </span>
                    <input  id= "loginname" type="text" name="loginname" placeholder="Enter Login Name" required
                            oninvalid="this.setCustomValidity('Enter Valid Login Name Here')"
                            oninput="this.setCustomValidity('')" ></input>
                    <br></br><br></br>

                    <span>Enter Password: </span>
                    <input type="text" name="password" placeholder="Enter  Password" required
    oninvalid="this.setCustomValidity('Enter Password Here')"
    oninput="this.setCustomValidity('')"></input>

                    <br></br><br></br>
                    <input type="submit" value="Submit"></input>
                </form>
                </div>
            </div>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;