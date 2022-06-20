import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
import { getTrendFilmById } from '../../services/axiosApi';
import Publication from './Publication/Publication';

export default function ItemPage() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function getFetcheFilms() {
      try {
        const item = await getTrendFilmById(itemId);
        setItem(item);
      } catch (error) {
        // toast.error('Фильм с таким ID не найдено');
      }
    }
    getFetcheFilms();
  }, [itemId]);

  return <main>{item && <Publication item={item} />}</main>;
}
