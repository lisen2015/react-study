import React, { Component } from 'react';
class Lightning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strikes: 0
        }
    }
    
    // 浏览器加载之后 render 之前
    componentDidMount() {
        window.setInterval(this.timerTrick, 1000);
    }

    render() {
        return (
            <div>
                <h1>{this.state.strikes.toLocaleString()}</h1>
            </div>
        );
    }

    timerTrick = () => {
        this.setState({
            strikes: this.state.strikes + 100
        })
    }
}

export default Lightning;   