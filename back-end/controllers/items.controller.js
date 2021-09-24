const { response } = require('express');
const { makeRequestByURL } = require('../services/mercado-libre.service');
const { URL_API, END_POINT_PRODUCTS_LIST, END_POINT_PRODUCT_DETAILS, END_POINT_CATEGORIES } = process.env;
const { author } = require('../package.json');
const { createPathByParamsType, getParams } = require('../utils');

const getCategoryListByFilters = (filters) => {
  const categoryFilter = filters.find(({ id }) => id === 'category');
  const categories = categoryFilter.values[0].path_from_root.map(({ name }) => name);

  return categories;
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

const getProductList = async (req, res = response) => {
  const { q: query, offset = 0, limit = 4 } = req.query;

  const url = URL_API + END_POINT_PRODUCTS_LIST;
  const endpoint = createPathByParamsType(url, { query, offset, limit });

  try {
    const { results, filters } = await makeRequestByURL(endpoint);

    const data = {
      author,
      categories: getCategoryListByFilters(filters),
      items: getItems(results),
    };

    res.json({
      ok: true,
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error Inesperado: revisar logs.',
    });
  }
};

const getCategoryListById = async (category_id) => {
  const categoriesUrl = URL_API + END_POINT_CATEGORIES + getParams([category_id]);

  const { path_from_root } = await makeRequestByURL(categoriesUrl);

  return path_from_root.map(({ name }) => name);
};

const getItem = async (req, res = response) => {
  const { id } = req.params;

  const productDetailsUrl = URL_API + END_POINT_PRODUCT_DETAILS;
  const itemURL = productDetailsUrl + getParams([id]);
  const descriptionURL = productDetailsUrl + getParams([id, 'description']);

  try {
    const [selectedItem, description] = await Promise.all([
      makeRequestByURL(itemURL),
      makeRequestByURL(descriptionURL),
    ]);

    const {
      id,
      title,
      price: the_price,
      pictures,
      condition,
      shipping: { free_shipping },
      sold_quantity,
      currency_id,
      category_id,
    } = selectedItem;

    const [amount, decimals] = the_price.toString().split('.');

    const price = {
      currency: currency_id,
      amount,
      decimals,
    };

    const item = {
      id,
      title,
      price,
      picture: pictures[0].url,
      condition,
      free_shipping,
      sold_quantity,
      description: description.plain_text,
    };

    const data = {
      author,
      item,
      categories: await getCategoryListById(category_id),
    };

    res.json({
      ok: true,
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error Inesperado: revisar logs.',
    });
  }
};

module.exports = {
  getProductList,
  getItem,
};
