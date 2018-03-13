import {Romnum} from './../src/romnum.js';

describe('Romnum', function() {

  it('tests if the number inputted is an integer', function() {
    var isInteger = new Romnum(4);
    expect(isInteger.checkType()).toEqual("this is an integer");
  });

  it('tests if the inputted number is a 5 and if it is a 5 it returns a V', function() {
    var isInteger = new Romnum(5);
    expect(isInteger.checkV()).toEqual("V");
  });
});
