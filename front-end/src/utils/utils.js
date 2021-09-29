import { FormatMoney } from 'format-money-js';

const formatMoney = new FormatMoney({
  decimals: 0,
  separator: '.',
});

export const getMoneyFormat = (amount) => {
  return formatMoney.from(amount, { symbol: '$ ' }, false);
};
