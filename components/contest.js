import React, {Component} from 'react';

import Timer from './timer.js';
import ProblemList from './problemlist';
import ContestBody from './contestBody';

class Contest extends Component{
    constructor(props){
        super(props);
        this.state={
            seconds:3600,
            mf:0
        };
        this.tf=this.tf.bind(this);
        // this.selectquestion=this.selectquestion.bind(this);
        this.tf();
    }
    tf(){

        setInterval(() => {
            {
                if (this.state.seconds > 0)
                    this.setState({seconds: this.state.seconds - 1});
            }
        }, 1000);

    }
    render(){
        console.log(this.props.match.params.code);
        return(
            <div>
                <Timer  sec={this.state.seconds}/>
                <ProblemList />
                <ContestBody probCode = {this.props.match.params.code}/>
            </div>
        )
    }
}

export default Contest;