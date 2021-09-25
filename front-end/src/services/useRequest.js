import { useEffect, useCallback, useState } from 'react';
import { createPathByParamsType, hasParams } from '@utils';

const { REACT_APP_URL } = process.env;

export const useRequest = () => {
  const [params, setQueryItem] = useState();
  const [response, setResponse] = useState({});

  const fetchAPI = useCallback(async () => {
    if (hasParams(params)) {
      const urlPath = createPathByParamsType(REACT_APP_URL, params);
      const response = await fetch(urlPath);

      const { ok, data } = await response.json();

      if (ok) {
        setResponse(data);
      } else {
        // TODO: Handle error response
      }
    }
  }, [params]);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  return [response, setQueryItem];
};
