// Define the fruit object.
// Give the fruit objects qualities
// Have all fruit objects inherit the properties. 
// 
var util = require('util');

var Fruit = function() {};

Fruit.prototype.edible = function() {
  return this._edible;
};
//the super class constructor
//Fruit.prototype.constructor.apply(this, arguments)

Fruit.prototype.discribe = function() {
  return util.format('%s fruit',
    this.edible() ? 'an edible' : 'a dangerous');
};

module.exports = Fruit;
