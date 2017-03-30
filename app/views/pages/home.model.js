import Backbone from 'backbone';
import _ from 'underscore';

let Home = Backbone.Model.extend({
  defaults: {
    name: '',
    items: []
  },
  initialize: function(){
    console.log();
  },
  addNewItem: addNewItem,
  removeItem: removeItem
});

function addNewItem() {
  // Using non-primitive data types in backbone model
  // http://stackoverflow.com/a/11662381/7186939
  // Get array and clone it
  let items = _(this.get('items')).clone();
  // Change it
  items.push({ name: 'Item ' + (items.length + 1) });
  // Set it
  this.set('items', items);
}

function removeItem(item) {
  let items = _(this.get('items')).clone();
  let index = items.indexOf(item);
  items.splice(index, 1);
  this.set('items', items);
}

let user = new Home({
  name: 'abcd',
  items: [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' },
    { name: 'Item 9' },
    { name: 'Item 10' },
  ]
});

export default user;
