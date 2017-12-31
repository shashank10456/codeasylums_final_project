import React from 'react';
import { Link } from 'react-router-dom'

const ProblemList = (props)=> {
    return (
        <ul>
            <Link to="/contest/QUES11"><li>Problem1</li></Link>
            <Link to="/contest/QUES2"><li>Problem2</li></Link>
            <Link to="/contest/QUES3"><li>Problem3</li></Link>
            <Link to="/contest/QUES4"><li>Problem4</li></Link>
        </ul>
    )
};

export default ProblemList;