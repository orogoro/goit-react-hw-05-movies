import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import toast from 'react-hot-toast';

import { Input, Form, Button } from './MovieDetails.styled';

export default function MovieDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearch = searchParams.get('query');
  const [value, setValue] = useState(currentSearch ?? '');

  const handleInputChange = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const searchQuery = name => {
    setSearchParams({ query: name });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) {
      toast.error('Bы ничего не ввели');
      return;
    }
    searchQuery(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={value}
        onChange={handleInputChange}
        autoComplete="off"
      />

      <Button type="submit">Search</Button>
    </Form>
  );
}

// const [value, setValue] = useState('');
// const [qwery, setQwery] = useState('');
// const [films, setFilms] = useState([]);

// const handleInputChange = e => {
//   setValue(e.currentTarget.value.toLowerCase());
// };

// const handleSubmit = e => {
//   e.preventDefault();

//   if (value.trim() === '') {
//     toast.error('Вы ничего не ввели');
//     return;
//   }
//   setQwery(value);
//   resetValue();
// };

// const resetValue = () => {
//   setValue('');
// };

// useEffect(() => {
//   async function fetchIdCast() {
//     try {
//       const items = await getFetchFilms(qwery);
//       setFilms(items);
//     } catch (error) {
//       toast.error(`Что-то пошло не так`);
//     }
//   }

//   if (qwery) {
//     fetchIdCast();
//   }
// }, [qwery]);

// <>
//   <form onSubmit={handleSubmit}>
//     <input
//       type="text"
//       onChange={handleInputChange}
//       value={value}
//       autoComplete="off"
//       autoFocus
//     />
//     <button type="submit">Search</button>
//   </form>

//   <ul>
//     {films &&
//       films.map(film => (
//         <li key={film.id}>
//           <Link to={`/movies/${film.id}`}>{film.original_title}</Link>
//         </li>
//       ))}
//   </ul>
// </>
