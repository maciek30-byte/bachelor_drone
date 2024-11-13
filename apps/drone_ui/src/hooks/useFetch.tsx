import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import axios, { AxiosResponse, CancelTokenSource } from 'axios';

//@TODO this state is a little bit complex, move it to useReducer//

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

type UseFetchOptions<T> = {
  url: string;
  setGlobalState?: Dispatch<SetStateAction<T | null>>;
};

export function useFetch<T>({ url, setGlobalState }: UseFetchOptions<T>): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const source: CancelTokenSource = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url, {
          cancelToken: source.token,
        });
        const data = response.data;

        if (setGlobalState) {
          setGlobalState(data);
          setState(prev => ({ ...prev, loading: false, error: null }));
        } else {
          setState({ data, loading: false, error: null });
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          setState({ data: null, loading: false, error: error as Error });
        }
      }
    };

    fetchData();

    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, [url]);

  return state;
}
