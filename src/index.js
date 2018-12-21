import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componts/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('App'));


//  +++++ 加入+++++
// https://www.jianshu.com/p/e09b2c57cf20
if (module.hot) {
    module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
