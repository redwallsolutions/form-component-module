import numeral from 'numeral';
import 'numeral/locales';
numeral.locale('pt-br');
numeral.defaultFormat('$0,0.00');
export var moneyMask = function moneyMask(value) {
  var newValue = value.replace(/[a-zA-Z\$,*\.]/g, '');

  if (/^(\d\.?\d?)+(,[0-9]+)?$/g.test(newValue)) {
    newValue = value.replace(',', '');
    newValue = newValue.length === 1 ? "0,0".concat(newValue) : "".concat(newValue.slice(0, newValue.length - 2), ",").concat(newValue.slice(-2));
    newValue = numeral(newValue).format();
  }

  return newValue;
};
export var percentMask = function percentMask(value) {
  var newValue = value.replace(/[a-zA-Z%]/g, '');

  if (/^([0-9]+)(,[0-9]+)?/g.test(newValue)) {
    newValue = newValue.replace(',', '');
    newValue = newValue.length === 1 ? "0.0".concat(newValue) : "".concat(newValue.slice(0, newValue.length - 2), ".").concat(newValue.slice(-2));
    newValue = numeral(parseFloat(newValue) / 100).format('0.00%');
  }

  return newValue;
};