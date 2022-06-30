import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { getCreditsById } from '../../../services/axiosApi';

import { Div, Ul, Li } from './Cast.styled';

export default function Cast() {
  const { itemId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchIdCast() {
      try {
        const items = await getCreditsById(itemId);
        setCast(items);
      } catch (error) {
        console.log(error);
      }
    }
    fetchIdCast();
  }, [itemId]);

  return (
    <Div>
      {cast && (
        <Ul>
          {cast.map(
            item =>
              item.profile_path && (
                <Li key={item.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                    alt=""
                  />
                  <p>{item.name}</p>
                  <p>Character: {item.character.slice(0, -7)}</p>
                </Li>
              )
          )}
        </Ul>
      )}
    </Div>
  );
}

// Cast.propTypes = {
//   key: PropTypes.string,
// };
