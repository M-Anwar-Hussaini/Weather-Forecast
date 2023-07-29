import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loading from 'react-loading';
import Province from './Province';
import { getApiData } from '../redux/slice';

export default function ProvinceList() {
  const { provinces, isLoading } = useSelector((store) => store.provinces);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center gap3 p-3 bgcolor-dark">
        <Loading type="spokes" />
        <span>Please wait...</span>
      </div>
    );
  }

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
          description={pro.description}
        />
      ))}
    </div>
  );
}
