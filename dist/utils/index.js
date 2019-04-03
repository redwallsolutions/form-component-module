export var moneyMask = function moneyMask(value) {
  var newValue = value.slice(0, -1);

  if (/^[0-9]+(,[0-9]+)?$/g.test(value)) {
    newValue = value.replace(',', '');
    newValue = newValue.length === 1 ? "0,0".concat(newValue) : "".concat(newValue.slice(0, newValue.length - 2), ",").concat(newValue.slice(-2));
    newValue = /^0/.test(newValue) && newValue.length > 4 ? newValue.slice(1) : newValue;
  }

  return newValue;
};