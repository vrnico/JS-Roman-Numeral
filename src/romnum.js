function Romnum(inputNum) {
  this.inputNum = inputNum;
}

Romnum.prototype.checkType = function() {
  if ((this.inputNum > 0)) {
    return "this is an integer";
  }
};

Romnum.prototype.checkV = function() {
  if ((this.inputNum === 5)) {
    return "V";
  }
};

Romnum.prototype.checkX = function() {
  if ((this.inputNum === 10)) {
    return "X";
  }
};

Romnum.prototype.checkL = function() {
  if ((this.inputNum === 50)) {
    return "L";
  }
};

Romnum.prototype.checkC = function() {
  if ((this.inputNum === 100)) {
    return "C";
  }
};

Romnum.prototype.checkD = function() {
  if ((this.inputNum === 500)) {
    return "D";
  }
};

Romnum.prototype.checkM = function() {
  if ((this.inputNum === 1000)) {
    return "M";
  }
};

Romnum.prototype.conversion = function(inputNum) {
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      letters = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
      roman = '',
      N = inputNum,
      i;

  if (inputNum < 1) {
    return '';
  }

  if (inputNum > 3999) {
    return 'N';
  }

  for (i = 0; i < numbers.length; i++) {
    while (N >= numbers[i]) {
      roman += letters[i];
      N -= numbers[i];
      }
  }
    return roman;
}
