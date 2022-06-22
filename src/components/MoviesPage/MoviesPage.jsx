import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

import { getFetchFilms } from 'services/axiosApi';
import MovieDetails from './MovieDetails/MovieDetails';
import QueryFilms from './QueryFilms/QueryFilms';
import { LoaderSpiner } from 'components/Loader/Loader';

export default function MoviesPage() {
  const [qwery, setQwery] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearch = searchParams.get('query');

  const searchQuery = name => {
    setSearchParams({ query: name });
  };

  useEffect(() => {
    async function fetchFilms() {
      try {
        setLoading(true);
        const values = await getFetchFilms(currentSearch);
        if (values.length > 0) {
          setQwery(values);
        } else {
          toast.error('Фильм не найден');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    if (currentSearch) {
      fetchFilms();
    }
  }, [currentSearch, setSearchParams]);

  return (
    <main>
      <MovieDetails onSubmit={searchQuery} />

      {loading && <LoaderSpiner />}

      {qwery && <QueryFilms qwery={qwery} />}
    </main>
  );
}
