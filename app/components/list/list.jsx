var React = require('react');
var List_Item = require('./list_item');
var {connect} = require('react-redux');
var Header = require('./header');
var List = React.createClass({
  render:function(){
    var {people} = this.props.people;
    console.log(people);
    function renderListItems(){
      return people.map((person, index)=>{
        return (
      

            <List_Item key = {index} name = {person.name}/>


        );
      });
    }


    return(
      <div className = "table_holder">
        <table>
            <tbody>
              <Header />
                {renderListItems()}
            </tbody>
        </table>
      </div>

    );
  }
});
module.exports = connect((state)=>{
  return {
    people:state
  };
})(List);
