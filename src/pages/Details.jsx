import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ProvinceHeader from '../components/ProvinceHeader';
import { setHeader } from '../redux/slice';
import ProvinceDetails from '../components/ProvinceDetails';

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(setHeader(id));
  }, [dispatch, id]);

  return (
    <main>
      <ProvinceHeader />
      <ProvinceDetails />
    </main>
  );
}
