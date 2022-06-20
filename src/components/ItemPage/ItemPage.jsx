import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';

import { getTrendFilmById } from '../../services/axiosApi';
import Publication from './Publication/Publication';

import {
  Main,
  StyleLink,
  NavLinkStyle,
  Div,
  P,
  Ul,
  Li,
} from './ItemPage.styled';

export default function ItemPage() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function getFetcheFilms() {
      try {
        const item = await getTrendFilmById(itemId);
        setItem(item);
      } catch (error) {
        toast.error('Фильм с таким ID не найдено');
      }
    }
    getFetcheFilms();
  }, [itemId]);

  return (
    <Main>
      <StyleLink to="/">🔙 Go back</StyleLink>
      {item && <Publication item={item} />}
      {item && (
        <>
          <hr />
          <Div>
            <P>Additional Information</P>
            <Ul>
              <Li>
                <NavLinkStyle to="cast">Cast</NavLinkStyle>
              </Li>
              <Li>
                <NavLinkStyle to="reviews">Reviews</NavLinkStyle>
              </Li>
            </Ul>
          </Div>
          <hr />
        </>
      )}

      <Outlet />
    </Main>
  );
}
