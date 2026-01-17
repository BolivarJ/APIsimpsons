import { useState, useEffect } from 'react';
import { fetchData } from '../services/api';

export const useFetch = (endpoint, page = 1) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const result = await fetchData(endpoint, page);
        // Asegurar que la estructura sea consistente
        setData({
          result: result.results || result.result || [],
          info: {
            pages: result.pages || 1,
            next: result.next || null,
            prev: result.prev || null,
            count: result.count || 0
          }
        });
      } catch (err) {
        console.error('useFetch Error:', err);
        setError(err.message || "Error loading data");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [endpoint, page]);

  return { data, loading, error };
};
