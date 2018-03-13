import {Romnum} from './../src/romnum.js';

describe('Romnum', function() {

  it('tests if the number inputted is an integer', function() {
    var isInteger = new Romnum(4);
    expect(isInteger.checkType()).toEqual("this is an integer");
  });
});
