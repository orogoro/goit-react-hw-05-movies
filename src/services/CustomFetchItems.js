import { useEffect, useState } from 'react';
import { getTrendFilms } from './axiosApi';

export const useFetchItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      try {
        const item = await getTrendFilms();
        setItems(item);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);

  return { items, loading };
};
