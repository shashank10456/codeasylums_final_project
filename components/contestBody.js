import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProblemDescription from "./problemdescription";
import Submission from './submission';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const ContestBody = () => (
    <main>
        <Switch>
            <Route exact path='/contest/:code/' component={ProblemDescription}/>
            <Route path='/contest/:code/:submission' component={Submission}/>
        </Switch>
    </main>
)

export default ContestBody;
