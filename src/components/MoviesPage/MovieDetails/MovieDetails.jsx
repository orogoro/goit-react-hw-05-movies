import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import toast from 'react-hot-toast';

import { Input, Forma, Button, P } from './MovieDetails.styled';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(35, 'Too Long!')
    .lowercase()
    .trim(),
});

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={massege => <P>{massege}</P>} />;
};

export default function MovieDetails({ onSubmit }) {
  const handleSubmit = async (values, { resetForm }) => {
    if (!values.name) {
      toast.error('Bы ничего не ввели');
      return;
    }
    onSubmit(values.name);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Forma>
        <Input className="" type="text" name="name" />

        <Button className="" type="submit">
          Search
        </Button>
        <FormError name="name" />
      </Forma>
    </Formik>
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
