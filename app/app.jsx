var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/main');
var {Provider} = require('react-redux');


require('style!css!sass!applicationStyles');

var store = require('store');

store.subscribe(()=>{});


ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
