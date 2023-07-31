import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Hero from '../components/Hero';
import ProvinceList from '../components/ProvinceList';
import { setHeader } from '../redux/slice';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeader('Afghanistan'));
  }, [dispatch]);

  return (
    <>
      <Hero />
      <ProvinceList />
    </>
  );
}
