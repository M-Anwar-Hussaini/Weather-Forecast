import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loading from 'react-loading';
import { Link } from 'react-router-dom';
import Province from './Province';
import { getApiData } from '../redux/slice';

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

export default function ProvinceList() {
  const { provinces, isLoading } = useSelector((store) => store.provinces);
  const dispatch = useDispatch();
  useEffect(() => {
    if (provinces.length === 0) dispatch(getApiData());
  }, [dispatch, provinces.length]);

  if (isLoading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center gap3 p-3 bgcolor-dark">
        <Loading type="spokes" />
        <span>Please wait...</span>
      </div>
    );
  }

  return (
    <div className="row gx-0 border-top">
      {provinces.map((pro, i) => (
        <Link to={`details/${pro.province}`} key={pro.province} style={linkStyle} className="col-6">
          <Province
            icon={pro.icon}
            isLoading={false}
            province={pro.province}
            temprature={pro.temprature}
            className={[1, 2].includes(i % 4) ? 'bgcolor-normal' : 'bgcolor-dark'}
            description={pro.description}
          />
        </Link>
      ))}
    </div>
  );
}
