var React = require("react");

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
        <div class={"container mt-3 "}>
        <div class={"row align-bottom mb-5"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>Class {this.props.class.classname} Conduct Grading and Remarks</h1>
            </div>
            </div>
        </div>
          <div class={"container mt-3 horizontal-scroll-wrapper squares detailed-box border"} >


                {conduct}




          </div>

        </body>
      </html>
    );
  }
}

module.exports = home;