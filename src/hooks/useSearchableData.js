import { useState, useEffect } from 'react';
import { fetchData } from '../services/api';

/**
 * Hook para buscar globalmente en múltiples páginas
 * Carga las primeras N páginas rápidamente
 */
export const useSearchableData = (endpoint, searchTerm) => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setAllData([]);
      return;
    }

    const loadPages = async () => {
      setLoading(true);
      setError(null);
      try {
        let allResults = [];
        // Cargar solo las primeras 10 páginas (200 items) para búsqueda rápida
        const maxPagesToLoad = 10;

        for (let pageNum = 1; pageNum <= maxPagesToLoad; pageNum++) {
          try {
            const response = await fetchData(endpoint, pageNum);
            
            if (response.result && response.result.length > 0) {
              allResults = [...allResults, ...response.result];
            } else {
              break; // Si no hay resultados, parar
            }
          } catch (err) {
            console.error(`Error loading page ${pageNum}:`, err);
            break;
          }
        }

        setAllData(allResults);
      } catch (err) {
        setError(err.message);
        setAllData([]);
      } finally {
        setLoading(false);
      }
    };

    loadPages();
  }, [endpoint, searchTerm]);

  // Filtrar por término de búsqueda
  const filteredData = allData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    data: filteredData,
    loading,
    error,
  };
};
