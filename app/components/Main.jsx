var React = require('react');
var Charts = require('./charts/charts');
var List = require('./list/list');

var Main = React.createClass({
  render:function(){
    return(
      <div className = "page container">
        <div className = "row"><Charts /></div>
        <div className = "row"><List /></div>

      </div>
    );
  }
});

module.exports = Main;
