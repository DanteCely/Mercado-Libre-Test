const getQueryParams = (params) => {
  const { pathname, ...queryParams } = params;

  let queryParamsPath = `${pathname}?`;

  for (const key in params) {
    if (Object.hasOwnProperty.call(queryParams, key)) {
      const value = queryParams[key];
      queryParamsPath += `${key}=${value}&`;
    }
  }

  return queryParamsPath.slice(0, -1);
};

const createPathByParamsType = (url, params) => {
  let urlPath = url;

  if (typeof params === 'object') {
    urlPath += getQueryParams(params);
  } else if (typeof params === 'string') {
    urlPath += params;
  }

  return urlPath;
};

const getParams = (paramsList) => {
  const paramsPath = paramsList.map((subPath) => `/${subPath}`);

  return paramsPath.join('');
};

module.exports = { getQueryParams, createPathByParamsType, getParams };
