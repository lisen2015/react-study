import React, { Component } from 'react';

import LightningCounterDisplay from "./LightningCounterDisplay";

class Lightning extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <LightningCounterDisplay/>
            </div>
         );
    }
}
 
export default Lightning;