var React = require("react");
var DefaultLayout = require('../layout/navigation')

class home extends React.Component {
  render() {
    console.log("VIEW ALL RESULT JFDKSJAFKASJFASJFLDASJFLDASJFLADSJFDALSJFDLSAJFSL");

    let subjectArray = [];

    for (let count = 0; count < this.props.class.length; count ++)
    {
        subjectArray.push(this.props.class[count].subjectname);
    }

    let uniqueSet = new Set(subjectArray);
    subjectArray = [...uniqueSet];


     let firstNameoOccurance = this.props.class[0].name;
     console.log(firstNameoOccurance);
     let nameOccuranceArray = [1];
     let countOccurance = [1];
     let currentIndex = 0;
    for (let count = 1; count < this.props.class.length; count ++)
    {
        console.log(this.props.class[count].name);
        if(firstNameoOccurance === this.props.class[count].name)
        {

            nameOccuranceArray[currentIndex]++;
            countOccurance[currentIndex]++;
        }
        else
        {

            firstNameoOccurance = this.props.class[count].name;

            nameOccuranceArray.push(1);
            countOccurance.push(1);
            currentIndex++;
        }
    }

//console.log(nameOccuranceArray);
//console.log(countOccurance);
currentIndex=0;




const nameCall = index=>{

    if(countOccurance[currentIndex] === nameOccuranceArray[currentIndex])
    {
        countOccurance[currentIndex] --;
        if(countOccurance[currentIndex]===0)
        {
            currentIndex ++;
        }

        return <div class = {"col-3 border-top"}><p>{this.props.class[index].name}</p></div>
    }

    if(countOccurance[currentIndex] !== nameOccuranceArray[currentIndex])
    {
        countOccurance[currentIndex] --;
        if(countOccurance[currentIndex]===0)
        {
            currentIndex ++;
        }
        return <div class = {"col-3"}></div>
    }


    if (index === this.props.class.length-1)
    {
        console.log("last");

        console.log(this.props.class[index].name);
        return <div class = {"col-3 border-bottom"}></div>
    }



}

      const student=this.props.class.map((student, index)=>
        {


            return <div class={"row"}>

                {nameCall(index)}

                <div class = {"col-3 border"}>
                    <p>{student.subjectname}</p>
                </div>
                <div class = {"col-2 border"}>
                    <p>{student.sa1}</p>
                </div>
                <div class = {"col-2 border"}>
                    <p>{student.sa2}</p>
                </div>
                <div class = {"col-2 border"}>
                    <p>{Math.floor(student.overall)}</p>
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
        <div class={"container mt-3 "}>
        <div class={"row align-bottom mb-5"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>{this.props.class[0].classname} Results</h1>
            </div>
            </div>
        </div>
        <div class={"container border mt-3 mb-5"}>
        <div class ={"row"}>
            <div class = {"col-3 border"}>
            <h4>Student Name</h4>
            </div>
            <div class = {"col-3 border"}>
            <h4>Subject Name</h4>
            </div>
            <div class = {"col-2 border"}>
            <h4>SA1</h4>
            </div>
                        <div class = {"col-2 border"}>
            <h4>SA2</h4>
            </div>
            <div class = {"col-2 border"}>
            <h4>Overall</h4>
            </div>
        </div>
        {student}
        </div>

        <div class={"container mt-3 mb-5"}>
        <div class={"row"}>
            <div class = {"col-3  mx-auto text-center"}>
                <button id={"downloadResult"}>Download Results</button>
            </div>

        </div>
        </div>
        <script src = {"/script/downloadFullResult.js"}></script>
        </body>
      </html>
    );
  }
}

module.exports = home;