var React = require('react');

var Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="columns small-centered medium-8 large-8  page">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
