import React, {Component} from 'react';

const getProblem = (code) => {

    fetch("http://5f143cd2.problems.sphere-engine.com/api/v3/problems/"+code+"?access_token=358102489eab046820e65ce57ec00ee1")
        .then(response => response.text())
        .then(contents => {
            console.log(contents);
            let js= JSON.parse(contents);
            document.getElementById("probName").innerHTML = js.code+" "+js.name;
            document.getElementById("probDesc").innerHTML = js.body;
        })
        .catch(() => console.log("Can’t access response. Blocked by browser?"));
};


const submission = ()=>{

    let e = document.getElementById("language");
    let lang = e.options[e.selectedIndex].value;
    let src = document.getElementById("codeArea").value;
    //console.log(this.props.probCode+lang+src);
    fetch("http://5f143cd2.problems.sphere-engine.com/api/v3/submissions?access_token=358102489eab046820e65ce57ec00ee1", {
        method: "post" ,
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        },
        body: "problemCode=QUES1"+"&source="+src+"&compilerId="+lang
    })
        .then(response=>{return response.json();})
        .then(function(data){
            console.log("Request " ,data);
        })
        .catch(function(error){
            console.log("failed", error);
        });


};


class ProblemDescription extends Component{
    constructor(props){
        super(props);
        console.log(this.props.match.params.code);
        getProblem(this.props.match.params.code);
    }
    render(){

        getProblem(this.props.match.params.code);
        return(
            <div>
                <h3 id="probName">Problem Name</h3>
                <p id="probDesc">Description</p>
                <form>
                    <div className="container">
                        <div className="row">
                            <textarea className="col-md-12" defaultValue="Enter your Code Here" id = "codeArea" rows = "20"/>
                        </div>
                        <div>
                            <select id = "language">
                                <option value="1">C++</option>
                                <option value="11">C</option>
                                <option value="116">Python</option>
                            </select>
                        </div>
                    </div>

                </form>
                <button onClick = {()=>{
                    let code = this.props.match.params.code;
                    let e = document.getElementById("language");
                    let lang = e.options[e.selectedIndex].value;
                    let src = document.getElementById("codeArea").value;
                    fetch("http://5f143cd2.problems.sphere-engine.com/api/v3/submissions?access_token=358102489eab046820e65ce57ec00ee1", {
                        method: "post" ,
                        headers: {
                            "Content-type": "application/x-www-form-urlencoded"
                        },
                        body: "problemCode="+this.props.match.params.code+"&source="+src+"&compilerId="+lang
                    })
                        .then(response=>{return response.json();})
                        .then(function(data){
                            console.log("Request " ,data);
                            window.location = "http://localhost:3000/contest/"+code+"/"+data.id;
                        })
                        .catch(function(error){
                            console.log("failed", error);
                        });


                }}>Submit</button>


            </div>
        );
    }
}



export default ProblemDescription;

