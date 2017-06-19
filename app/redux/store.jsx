var redux = require('redux');

var db = [
  {
    name:"Adam Compton"

  },
  {
    name:"Emma O'Sulivan"
  },
  {
    name:"Brandon Walsh"
  },
  {
    name:"David O'Brien"
  },
  {
    name:"Sophie O'Conor"
  },
  {
    name:"Ruby von Rails"
  },
  {
    name:"Snake Python"
  }
];


var peopleReducer = (state = {people:db}, action)=>{
  return state;
};

var store = redux.createStore(peopleReducer);


var state = store.getState();
console.log('current state. ',state);

module.exports = store;
