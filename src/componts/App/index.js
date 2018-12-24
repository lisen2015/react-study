import React, { Component } from 'react';
import './style.css';
import Header from '../Header';
import Lightning from '../Lightning';
import OrderList from '../Orders/OrderList';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Lightning/>
        <OrderList/>
      </div>
    );
  }
}

export default App;
