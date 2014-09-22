var expect = require('chai').expect;
var Fruit = require('../index');


describe('gives qualities of objects that are fruits', function(){
  it('gives all the qualities of a fruit', function(){
    // we will acknowledge that the new object is class fruit
    // and get back all the descriptions of fruits.
    var apple = new Fruit();
    var result = apple.discribe();
    expect(result).to.eql('edible');
  });
});