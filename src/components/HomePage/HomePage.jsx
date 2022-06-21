// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useFetchItems } from '../../services/CustomFetchItems';
import { LoaderSpiner } from '../Loader/Loader';

import { StyledLink, Ul, Li, H1 } from './HomePage.styled';

// const useFetchItems = () => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     async function fetchItems() {
//       setLoading(true);
//       try {
//         const item = await getTrendFilms();
//         setItems(item);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchItems();
//   }, []);

//   return { items, loading };
// };

export default function HomePage() {
  const { items, loading } = useFetchItems();

  return (
    <main>
      <H1>Trending today</H1>
      {loading && <LoaderSpiner />}
      <Ul>
        {items.map(item => (
          <Li key={item.id}>
            <StyledLink to={`/movies/${item.id}`}>
              🎞
              {item.original_title}
            </StyledLink>
          </Li>
        ))}
      </Ul>
    </main>
  );
}
