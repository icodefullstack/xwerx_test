var React = require('react');

var List_Item = React.createClass({
  render:function(){
    var name = this.props.name;
    return(
      <tr className = "list_item">
        <td> <b><i className="fa fa-birthday-cake" aria-hidden="true"></i> { name }</b> </td>
        <td>{ name + "'s End of Year review comming up'"}</td>
        <td>03 Feb</td>
        <td>VERY <i className="glyphicon glyphicon-signal"></i></td>
      </tr>
    );
  }
});
module.exports = List_Item;
