var React = require('react');
var Charts = require('./charts/charts');
var List = require('./list/list');

var Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="columns small-centered medium-8 large-8  page">
          {props.children}

            <Charts />

            <List />

        </div>
      </div>
    </div>
  );
}

module.exports = Main;
