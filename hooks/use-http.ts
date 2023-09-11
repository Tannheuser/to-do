import { useCallback, useState } from 'react';

export const useHttp = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(async (options: RequestInit) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        setError(response.statusText)
      }

      const result = await response.json();

      setData(result);
    } catch (err) {
      setError((err as Error).message);
    }

    setLoading(false);
  }, [url]);

  return {
    data,
    loading,
    error,
    sendRequest,
  };
};
