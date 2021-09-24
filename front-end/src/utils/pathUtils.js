export const getQueryParams = (params) => {
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

export const createPathByParamsType = (url, params) => {
  let urlPath = url;

  if (typeof params === 'object') {
    urlPath += getQueryParams(params);
  } else if (typeof params === 'string') {
    urlPath += params;
  }

  return urlPath;
};

export const hasParams = (params) => {
  const isFullObject = typeof params === 'object' && !Array.isArray(params) && !!Object.keys(params).length;
  const isFullString = typeof params === 'string' && !!params.length;

  return isFullObject || isFullString;
};
