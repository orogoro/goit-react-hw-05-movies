import { useEffect, useState } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Suspense } from 'react';

import { getTrendFilmById } from '../../services/axiosApi';
import { LoaderSpiner } from 'components/Loader/Loader';
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

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    async function getFetcheFilms() {
      try {
        const item = await getTrendFilmById(itemId);
        setItem(item);
      } catch (error) {
        toast.error('Фильм с таким ID не найдено');
        setTimeout(() => navigate('/'), 1000);
      }
    }
    getFetcheFilms();
  }, [itemId, navigate]);

  // const onClickBtnBack = () => {

  // if (location.pathname === `/movies/${item.id}`) {
  //   navigate(-1);
  //   return;
  // } else if (location.pathname === `/movies/${item.id}/cast`) {
  //   navigate(-2);
  //   return;
  // } else if (location.pathname === `/movies/${item.id}/reviews`) {
  //   navigate(-2);
  //   return;
  // }
  // navigate('/');
  // };

  return (
    <Main>
      {item && (
        <StyleLink to={location?.state?.from ?? '/'}>🔙 Go back</StyleLink>
      )}
      {!item && <LoaderSpiner />}

      {item && <Publication item={item} />}
      {item && (
        <>
          <hr />
          <Div>
            <P>Additional Information</P>
            <Ul>
              <Li>
                <NavLinkStyle
                  to="cast"
                  state={{ from: location?.state?.from ?? '/' }}
                >
                  Cast
                </NavLinkStyle>
              </Li>
              <Li>
                <NavLinkStyle
                  to="reviews"
                  state={{ from: location?.state?.from ?? '/' }}
                >
                  Reviews
                </NavLinkStyle>
              </Li>
            </Ul>
          </Div>
          <hr />
        </>
      )}
      <Suspense fallback={<LoaderSpiner />}>
        <Outlet />
      </Suspense>
    </Main>
  );
}
