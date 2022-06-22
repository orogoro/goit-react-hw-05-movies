import { useLocation } from 'react-router-dom';
import { StyledLink, Ul, Li } from './QueryFilms.styled';

export default function QueryFilms({ qwery }) {
  let location = useLocation();
  return (
    <Ul>
      {qwery.map(film => (
        <Li key={film.id}>
          <StyledLink to={`/movies/${film.id}`} state={{ from: location }}>
            🎥 {film.original_title}
          </StyledLink>
        </Li>
      ))}
    </Ul>
  );
}
