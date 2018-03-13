export function Romnum(numInput) {
  this.numInput = numInput;
}

Romnum.prototype.checkType = function() {
  if ((this.numInput > 0)) {
    return "this is an integer";
  }
};
