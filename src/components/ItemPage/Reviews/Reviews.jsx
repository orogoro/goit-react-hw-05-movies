import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { getReviewsById } from '../../../services/axiosApi';
import { Ul, Li } from './Reviews.styled';

export default function Reviews() {
  const { itemId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchIdReviews() {
      try {
        const items = await getReviewsById(itemId);
        setReviews(items);
      } catch (error) {
        console.log(error);
      }
    }
    fetchIdReviews();
  }, [itemId]);
  return (
    <div>
      <Ul>
        {reviews.length !== 0 ? (
          reviews.map(item => (
            <Li key={item.id}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
            </Li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </Ul>
    </div>
  );
}

// Reviews.propTypes = {
//   key: PropTypes.string,
// };
