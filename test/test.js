var expect = require('chai').expect;
var Fruit = require('../index');


describe('gives qualities of objects that are fruits', function(){
  it.skip('gives all the qualities of a fruit', function(){
    // we will acknowledge that the new object is class fruit
    // and get back all the descriptions of fruits.
    var Apple = Fruit.extend({
      initialize: function() {
        this._edible = true
        }
       })
     var result = Apple.discribe();
    expect(result).to.eql('an edible');
    })
  });
