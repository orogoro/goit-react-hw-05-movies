import PropTypes from 'prop-types';

import { Span, Article, Container, Ul } from './Publication.styled';

export default function Publication({
  item: {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  },
}) {
  // console.log(item);
  return (
    <>
      <Article>
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={original_title}
        />
        <Container>
          <h2>
            {original_title} (<span>{release_date.slice(0, 4)}</span>)
          </h2>
          <p>User score: {vote_average * 10}%</p>
          <Ul>
            <li>
              <h3>Overview</h3>
              <p>{overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
              <p>
                {genres.map(({ id, name }) => (
                  <Span key={id}>{name}</Span>
                ))}
              </p>
            </li>
          </Ul>
        </Container>
      </Article>
    </>
  );
}

Publication.propTypes = {
  item: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};
