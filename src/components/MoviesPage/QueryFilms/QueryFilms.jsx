import { StyledLink, Ul, Li } from './QueryFilms.styled';

export default function QueryFilms({ qwery }) {
  return (
    <Ul>
      {qwery.map(film => (
        <Li key={film.id}>
          <StyledLink to={`/movies/${film.id}`}>
            🎥 {film.original_title}
          </StyledLink>
        </Li>
      ))}
    </Ul>
  );
}
