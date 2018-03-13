export function Romnum(numInput) {
  this.numInput = numInput;
}

Romnum.prototype.checkType = function() {
  if ((this.numInput > 0)) {
    return "this is an integer";
  }
}

Romnum.prototype.checkV = function() {
  if ((this.numInput === 5)) {
    return "V";
  }
};

Romnum.prototype.checkX = function() {
  if ((this.numInput === 10)) {
    return "X";
  }
};

Romnum.prototype.checkL = function() {
  if ((this.numInput === 50)) {
    return "L";
  }
};

Romnum.prototype.checkC = function() {
  if ((this.numInput === 100)) {
    return "C";
  }
};

Romnum.prototype.checkD = function() {
  if ((this.numInput === 500)) {
    return "D";
  }
};

Romnum.prototype.checkM = function() {
  if ((this.numInput === 1000)) {
    return "M";
  }
};
