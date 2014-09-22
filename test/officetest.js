var expect = require('chai').expect;
var MainClass = require('../lib/main');


describe('is there a class on a particular day', function(){
  it('gives the name of the class', function(){
    var c = new MainClass();
    var result = c.isThereAClass('Tuesday');
    expect(result).to.eql('Night Class');
  });
  it('gives the name of the class', function(){
    var c = new MainClass();
    var result = c.isThereAClass('Friday');
    expect(result).to.eql('Front end class');
  });
});