const { response } = require('express');
const { makeRequestByURL } = require('../services/mercado-libre.service');
const { URL_API, END_POINT_PRODUCTS_LIST, END_POINT_PRODUCT_DETAILS, END_POINT_CATEGORIES } = process.env;
const { author } = require('../package.json');
const { pathUtils, handleError, itemsUtils } = require('../utils');

const { checkErrorAndThrow, sendFailedResponse } = handleError;
const { createPathByParamsType, getParams } = pathUtils;
const { getCategoryListByFilters, getItems } = itemsUtils;

const getProductList = async (req, res = response) => {
  const { q: query, offset = 0, limit = 4 } = req.query;

  const url = URL_API + END_POINT_PRODUCTS_LIST;
  const endpoint = createPathByParamsType(url, { query, offset, limit });

  try {
    const productList = await makeRequestByURL(endpoint);

    checkErrorAndThrow(productList);

    const { results, filters } = productList;

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
    sendFailedResponse(res, error);
  }
};

const getCategoryListById = async (category_id) => {
  const categoriesUrl = URL_API + END_POINT_CATEGORIES + getParams([category_id]);
  const categories = await makeRequestByURL(categoriesUrl);

  checkErrorAndThrow(categories);

  const { path_from_root } = categories;

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

    checkErrorAndThrow([selectedItem, description]);

    const {
      id,
      title,
      price: the_price,
      category_id,
      pictures,
      condition,
      shipping: { free_shipping },
      sold_quantity,
      currency_id,
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
    sendFailedResponse(res, error);
  }
};

module.exports = {
  getProductList,
  getItem,
};
