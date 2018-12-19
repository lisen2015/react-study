import React, { Component } from 'react';
import './style.css';
import Header from '../Header';
import OrderList from '../OrderList';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <OrderList></OrderList>
      </div>
    );
  }
}

export default App;
