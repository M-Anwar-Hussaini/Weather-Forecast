import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Province from './Province';
import { getApiData } from '../redux/slice';

export default function ProvinceList() {
  const { provinces, isLoading, hasError } = useSelector((store) => store.provinces);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);
  return (
    <div>
      {provinces.map((pro, i) => (
        <Province
          icon={pro.icon}
          isLoading={false}
          province={pro.province}
          temprature={pro.temprature}
          key={pro.province}
          className={i % 2 === 1 ? 'bgcolor-normal' : 'bgcolor-dark'}
        />
      ))}
    </div>
  );
}
