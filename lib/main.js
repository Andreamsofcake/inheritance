'use strict';

var Classroom = require('../office')

function MainClass() {
  Classroom.apply(this, arguments);

  this._desks = 8;
  this._chairs = 27;
  this._screen = true;
  this._class = 'Night Class'
  //unless it is the morning on m/w/f it is 'Front end'
};

MainClass.prototype = Object.create(Classroom.prototype);
MainClass.prototype.constructor = MainClass;


MainClass.prototype.isThereAClass = function(dayOfWeek) {

  if (dayOfWeek === 'Monday'||dayOfWeek === 'Wedneday'|| dayOfWeek === 'Friday') {
    this.setClass('Front end class')
  }
  return this._class;
};

module.exports = MainClass;