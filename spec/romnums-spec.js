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

  it('tests if the inputted number is a 50 and if it is a 50 it returns a L', function() {
    var isFifty = new Romnum(50);
    expect(isFifty.checkL()).toEqual("L");
  });

  it('tests if the inputted number is a 100 and returns a C', function() {
    var isHundred = new Romnum(100);
    expect(isHundred.checkC()).toEqual("C");
  });

  it('tests if the inputted number is 500 and if it is returns D', function() {
    var isFhun = new Romnum(500);
    expect(isFhun.checkD()).toEqual("D");
  });

  it('tests if the inputted number is 1000 and if it is returns M', function() {
    var isThou = new Romnum(1000);
    expect(isThou.checkM()).toEqual("M");
  });
});
