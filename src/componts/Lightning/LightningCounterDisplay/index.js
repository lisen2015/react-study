import React, { Component } from 'react';

import './style.css'

import LightningCounter from '../LightningCounter'

class LightningCounterDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="lightningCounterDisplay">
                <LightningCounter/>
            </div>
         );
    }
}
 
export default LightningCounterDisplay;