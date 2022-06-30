import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledLink, Ul, Li } from './QueryFilms.styled';

export default function QueryFilms({ qwery }) {
  let location = useLocation();
  return (
    <Ul>
      {qwery.map(({ id, original_title }) => (
        <Li key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            🎥 {original_title}
          </StyledLink>
        </Li>
      ))}
    </Ul>
  );
}

QueryFilms.propTypes = {
  qwery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
