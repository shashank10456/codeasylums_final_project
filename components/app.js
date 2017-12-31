import React, {Component} from 'react';

import Head from './head';
import Main from './body';
//import Footer from '/footer';


class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Head />
                <Main />

            </div>
        );
    }
}

export default App;
