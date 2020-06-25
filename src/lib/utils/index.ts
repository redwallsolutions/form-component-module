import numeral from "numeral";
import "numeral/locales";
numeral.locale("pt-br");
numeral.defaultFormat("$0,0.00");

const money = (value: string) => {
  let newValue: string | number = value.replace(/\D+/g, "").replace(/^0+/, "");
  newValue = parseInt(newValue) / 100;
  if (isNaN(newValue)) {
    return "";
  }
  return numeral(newValue).format();
};

const simpleMonthYear = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/^[^0-1]{1}/, "")
    .replace(/^(1)[^0-2]/, "$1")
    .replace(/^(0)0/, '$1')
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\/\d{2})\d+?$/, "$1");
};
const percent = (value: string) => {
  let newValue = value.replace(/[a-zA-Z%]/g, "");
  if (/^([0-9]+)(,[0-9]+)?/g.test(newValue)) {
    newValue = newValue.replace(",", "");
    newValue =
      newValue.length === 1
        ? `0.0${newValue}`
        : `${newValue.slice(0, newValue.length - 2)}.${newValue.slice(-2)}`;
    newValue = numeral(parseFloat(newValue) / 100).format("0.00%");
  }

  return newValue;
};

const cel = (value: string) => {
  let newValue = value.replace(/[^\d]/g, "");
  const celSize = newValue.length;
  if (celSize > 11) newValue = newValue.slice(1);
  if (celSize > 7) {
    newValue = `(${newValue.slice(0, 2)}) ${newValue.slice(
      2,
      7
    )}-${newValue.slice(7)}`;
  } else if (celSize > 2) {
    newValue = `(${newValue.slice(0, 2)}) ${newValue.slice(2)}`;
  } else if (celSize > 0) {
    newValue = `(${newValue.slice(0)}`;
  }
  return newValue;
};

const _default = (value: any) => value;

const isEmpty = (value: any) =>
  !value || value === "" || value === "🔤"
    ? "Esse campo é obrigatório."
    : undefined;

const cpf = (value: any) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};
export default {
  money,
  percent,
  cel,
  cpf,
  default: _default,
  isEmpty,
  simpleMonthYear,
} as any;
