import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

import { getFetchFilms } from '../../services/axiosApi';

export default function MoviesPage() {
  const [value, setValue] = useState('');
  const [qwery, setQwery] = useState('');
  const [films, setFilms] = useState([]);

  const handleInputChange = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      toast.error('Вы ничего не ввели');
      return;
    }
    setQwery(value);
    resetValue();
  };

  const resetValue = () => {
    setValue('');
  };

  useEffect(() => {
    async function fetchIdCast() {
      try {
        const items = await getFetchFilms(qwery);
        setFilms(items);
      } catch (error) {
        toast.error(`Что-то пошло не так`);
      }
    }

    if (qwery) {
      fetchIdCast();
    }
  }, [qwery]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInputChange}
          value={value}
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {films &&
          films.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.original_title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
