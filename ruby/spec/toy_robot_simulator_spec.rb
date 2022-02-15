require_relative '../toy_robot_simulator'

describe 'ToyRobotSimulator' do
  # Write your tests here
  describe 'Run' do
    result = ''

    context 'Example 1' do
      before do
        input = "PLACE 0,0,NORTH\nMOVE\nREPORT\n"
        result = ToyRobotSimulator.new.run(input);
      end

      it 'logs that the simulator is running' do
        expect(result).to eq('Output: 0,1,NORTH')
      end
    end
  end
end
