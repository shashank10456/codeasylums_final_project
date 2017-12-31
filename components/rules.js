import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class Rules extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div>
                    <Link to='/contest/QUES11'>Continue to Contest</Link>
                </div>
                <div>
                    <p>
                        About
                        Codeasylms is a place where you can feel the implementation of latest technologies in the field of Software Development. This is for Data Structure practice for codeasylums winter batch 2017.
                    <br/><br/>
                        Rules
                        <br/>
                        The creator of this contest is solely responsible for setting and communicating the eligibility requirements associated with prizes awarded to participants, as well as for procurement and distribution of all prizes. The contest creator holds HackerRank harmless from and against any and all claims, losses, damages, costs, awards, settlements, orders, or fines.
                        Code directly from our platform, which supports over 30 languages. Learn more here.
                        <br/><br/>
                        Scoring<br/>
                        Each challenge has a pre-determined score.
                        <br/><br/>
                        A participant’s score depends on the number of test cases a participant’s code submission successfully passes.
                        If a participant submits more than one solution per challenge, then the participant’s score will reflect the highest score achieved. In a game challenge, the participant's score will reflect the last code submission.
                        Participants are ranked by score. If two or more participants achieve the same score, then the tie is broken by the total time taken to submit the last solution resulting in a higher score
                    </p>
                </div>
            </div>
        )
    }
}

export default Rules;