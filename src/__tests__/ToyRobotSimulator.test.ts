import ToyRobotSimulator from "../ToyRobotSimulator";

describe('ToyRobotSimulator', () => {
  describe('.run', () => {
    describe('example (a)', () => {
      const commands = `PLACE 0,0,NORTH\nMOVE\nREPORT\n`

      let result;

      beforeEach(() => {
        result = ToyRobotSimulator.run(commands);
      });

      it('logs that the simulator is running', () => {
        expect(result).toEqual('Output: 0,1,NORTH')
      });
    });
  });
});
