const ToyRobotSimulator = require('./src/ToyRobotSimulator');

const result = ToyRobotSimulator.run(`PLACE 0,0,NORTH\nMOVE\nREPORT`);
console.log(result);
