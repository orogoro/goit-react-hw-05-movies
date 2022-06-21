import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

import { getFetchFilms } from 'services/axiosApi';
import MovieDetails from './MovieDetails/MovieDetails';
import QueryFilms from './QueryFilms/QueryFilms';
import { LoaderSpiner } from 'components/Loader/Loader';

export default function MoviesPage() {
  const [qwery, setQwery] = useState('');
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const currentSearch = searchParams.get('query');

  const searchQuery = name => {
    setValue(name);
  };

  useEffect(() => {
    setValue(currentSearch);
  }, [currentSearch]);

  useEffect(() => {
    async function fetchFilms() {
      try {
        setLoading(true);
        const values = await getFetchFilms(value);
        if (values.length > 0) {
          setQwery(values);
          setSearchParams({ query: value });
        } else {
          toast.error('Фильм не найден');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    if (value) {
      fetchFilms();
    }
  }, [setSearchParams, value]);

  return (
    <main>
      <MovieDetails onSubmit={searchQuery} />

      {loading && <LoaderSpiner />}

      {qwery && <QueryFilms qwery={qwery} />}
    </main>
  );
}
