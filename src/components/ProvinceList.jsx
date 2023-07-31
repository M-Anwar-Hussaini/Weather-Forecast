import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Province from './Province';
import { getApiData } from '../redux/slice';
import { getBasicData } from '../redux/helper';
import Loading from './Loading';

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
      <Loading />
    );
  }

  return (
    <div className="row gx-0 border-top">
      {provinces.map((all, i) => {
        const pro = getBasicData(all);
        return (
          <Link to={`details/${pro.province}`} key={pro.province} style={linkStyle} className="col-6">
            <Province
              icon={pro.icon}
              province={pro.province}
              temprature={pro.temprature}
              className={[1, 2].includes(i % 4) ? 'bgcolor-normal' : 'bgcolor-dark'}
              description={pro.description}
            />
          </Link>
        );
      })}
    </div>
  );
}
