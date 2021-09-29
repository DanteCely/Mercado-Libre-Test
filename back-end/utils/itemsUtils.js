const { FormatMoney } = require('format-money-js');

const formatMoney = new FormatMoney({
  decimals: 2,
  separator: '.',
});

const getPriceAmount = (price) => {
  let { amount, decimals } = formatMoney.from(price, { symbol: '' }, true);

  amount = Number(amount.replaceAll('.', ''));
  decimals = decimals.replaceAll('.', '');
  return { amount, decimals };
};

const getCategoryListByFilters = (filters) => {
  const categoryFilter = filters.find(({ id }) => id === 'category');
  const { path_from_root } = categoryFilter?.values[0] || {};

  return path_from_root?.map(({ name }) => name) || [];
};

const getItems = (results) => {
  const items = results.map((item) => {
    const {
      id,
      title,
      prices: { presentation },
      price: current_price,
      thumbnail,
      condition,
      shipping: { free_shipping },
      address: { city_name },
    } = item;

    const price = {
      currency: presentation.display_currency,
      ...getPriceAmount(current_price),
    };

    return {
      id,
      title,
      price,
      picture: thumbnail,
      condition,
      free_shipping,
      city_name,
    };
  });

  return items;
};

module.exports = { getCategoryListByFilters, getItems, getPriceAmount };
