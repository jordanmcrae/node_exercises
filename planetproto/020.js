// -> Create a machine object
//    with a property motors = 4

var machine = {
  motors: 4
};

// -> Create a robot object
//    with a property friendly = true
var robot = {
  friendly: true
};

// -> Create a robby object
var robby = {};

// -> Make machine the prototype of robot
robot.__proto__ = machine;  // The __proto__ property of Object.prototype is an accessor property (a getter function and a setter function) that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed.

// -> Make robot the prototype of robby
robby.__proto__ = robot;

// -> What is `robby.motors`?
claim(robby.motors, 4);

// -> What is `robby.friendly`?
claim(robby.friendly, true);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	robot:   robot,
	robby:   robby
}
