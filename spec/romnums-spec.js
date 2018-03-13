import {Romnum} from './../src/romnum.js';

describe('Romnum', function() {

  it('tests if the number inputted is an integer', function() {
    var isInteger = new Romnum(4);
    expect(isInteger.checkType()).toEqual("this is an integer");
  });

  it('tests if the inputted number is a 5 and if it is a 5 it returns a V', function() {
    var isFive = new Romnum(5);
    expect(isFive.checkV()).toEqual("V");
  });

  it('tests if the inputted number is a 10 and if it is a 10 it returns a X', function() {
    var isTen = new Romnum(10);
    expect(isTen.checkX()).toEqual("X");
  });
});
