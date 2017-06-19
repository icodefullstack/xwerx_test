var React = require('react');

var Header = React.createClass({
  render:function(){
    return(
      <tr>
        <td colSpan="2">
          ALERTS Latest alerts(41)
        </td>
        <td colSpan = "2">
          <ul>
            <li><i className="fa fa-pie-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-cog" aria-hidden="true"></i></li>
            <li><i className="fa fa-pie-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-pie-chart" aria-hidden="true"></i></li>
          </ul>
        </td>
      </tr>
    );
  }
})

module.exports = Header;
