'use strict'


//
//classrooms have 
//desks
//chairs
//screen
//is there a class?
//
//

var Classroom = function() {};

Classroom.prototype.getDesks = function() {
  return this._desks;
};

Classroom.prototype.setDesks = function(number) {
  this._desks = number;
};
Classroom.prototype.getChairs = function() {
  return this._chairs;
};

Classroom.prototype.setChairs = function(number) {
  this._chairs = number;
};

Classroom.prototype.screen = function() {
  return this._screen;
};

Classroom.prototype.setScreen = function(boolean) {
  this._screen = boolean;
};

Classroom.prototype.getClass = function() {
  return this._class;
};

Classroom.prototype.setClass = function(arg) {
  this._class = arg;
};

module.exports = Classroom;



