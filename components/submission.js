import React, {Component} from 'react';


const getSubmission = (submissionId) => {

    fetch("http://5f143cd2.problems.sphere-engine.com/api/v3/submissions/"+submissionId+"?access_token=358102489eab046820e65ce57ec00ee1")
        .then(response => response.text())
        .then(contents => {
            console.log(contents);
            let js= JSON.parse(contents);
            console.log(js.result_score + js.testcases[0].status_code);


            document.getElementById("probName").innerHTML = js.problem.name;
            document.getElementById("source").innerHTML = js.source;
            document.getElementById("status").innerHTML = js.testcases[0].status_code;
            document.getElementById("result").innerHTML = js.result_score;

        })
        .catch(() => console.log("Can’t access response. Blocked by browser?"));
};


class Submission extends Component{
    constructor(props){
        super(props);
        getSubmission(this.props.match.params.submission);
    }

    render(){
        getSubmission(this.props.match.params.submission);
        console.log(this.props);
        return(
            <div className="col-md-12">
                <div id = "probName">ProblemCode</div>
                <div>
                    <table>
                        <tr>
                            <th>Test Cases</th>
                            <th>Status</th>
                            <td>Time</td>
                            <td>Score</td>
                        </tr>
                        <tr>
                            <td>Test Case #0</td>
                            <td id="status">a</td>
                            <td id="time">b</td>
                            <td id="score">c</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td/>
                            <td/>
                            <td id="total">d</td>
                        </tr>
                    </table>
                </div>
                <div id="source">SourceCode</div>
            </div>
        )
    }
}

export default Submission;