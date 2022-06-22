import PropTypes from 'prop-types';

import { Span, Article, Container, Ul } from './Publication.styled';

export default function Publication({ item }) {
  return (
    <Article>
      <img
        src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
        alt={item.original_title}
      />
      <Container>
        <h2>
          {item.original_title} (<span>{item.release_date.slice(0, 4)}</span>)
        </h2>
        <p>User score: {item.vote_average * 10}%</p>
        <Ul>
          <li>
            <h3>Overview</h3>
            <p>{item.overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
            <p>
              {item.genres.map(item => (
                <Span key={item.id}>{item.name}</Span>
              ))}
            </p>
          </li>
        </Ul>
      </Container>
    </Article>
  );
}

Publication.propTypes = {
  key: PropTypes.string,
  item: PropTypes.object,
};
