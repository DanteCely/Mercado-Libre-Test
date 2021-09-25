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
    } = item;

    const [amount, decimals] = current_price.toString().split('.');
    const price = {
      currency: presentation.display_currency,
      amount,
      decimals,
    };

    return {
      id,
      title,
      price,
      picture: thumbnail,
      condition,
      free_shipping,
    };
  });

  return items;
};

module.exports = { getCategoryListByFilters, getItems };
