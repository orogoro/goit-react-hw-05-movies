import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendFilms } from '../../services/axiosApi';
import { LoaderSpiner } from '../Loader/Loader';

const useFetchItems = () => {
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

export default function HomePage() {
  const { items, loading } = useFetchItems();

  return (
    <main>
      <h1>Trending today</h1>
      {loading && <LoaderSpiner />}
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.original_title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
