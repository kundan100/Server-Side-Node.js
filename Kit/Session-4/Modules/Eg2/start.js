/***
 * The goal of this file is to know about the Mobules functions;
 *
 *
 * How to run this example:
 * 1. node start.js
 * 2. See the message get displayed on prompt.
 */

var circle = require('./circle.js');
console.log("The area of a circle of radius 4 is: " + circle.area(4));


var square = require('./square.js');
var mySquare1 = square(2);
var mySquare2 = square(4);
console.log('The area of my square 1 is: ' + mySquare1.area());
console.log('The area of my square 2 is: ' + mySquare2.area());

