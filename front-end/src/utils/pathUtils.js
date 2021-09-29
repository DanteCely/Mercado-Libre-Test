export const getQueryParams = (params) => {
  const { pathname = '', ...queryParams } = params;

  let queryParamsPath = `${pathname}?`;

  for (const key in params) {
    if (Object.hasOwnProperty.call(queryParams, key)) {
      const value = queryParams[key];
      queryParamsPath += `${key}=${value}&`;
    }
  }

  return queryParamsPath.slice(0, -1);
};

export const getParams = (paramsList) => {
  const paramsPath = paramsList.map((subPath, index) => (index === 0 ? subPath : `/${subPath}`));

  return paramsPath.join('');
};

export const createPathByParamsType = (url, params) => {
  let urlPath = url;

  if (Array.isArray(params)) {
    urlPath += getParams(params);
  } else if (typeof params === 'object') {
    urlPath += getQueryParams(params);
  } else if (typeof params === 'string') {
    urlPath += params;
  }

  return urlPath;
};

export const hasParams = (params) => {
  const isFullObject = typeof params === 'object' && !Array.isArray(params) && !!Object.keys(params).length;
  const isFullString = typeof params === 'string' && !!params.length;
  const isFullArray = Array.isArray(params) && !!params.length;

  return isFullObject || isFullString || isFullArray;
};

export const getSearchString = (search) => {
  return new URLSearchParams(search).get('search') || '';
};
