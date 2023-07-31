import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
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
  const [result, setResult] = useState('');
  const { provinces, isLoading } = useSelector((store) => store.provinces);
  const dispatch = useDispatch();

  const filtered = provinces.filter((el) => el.name.toLowerCase().includes(result));

  useEffect(() => {
    if (provinces.length === 0) dispatch(getApiData());
  }, [dispatch, provinces.length]);

  return (
    <div className="row gx-0 border-top">
      <div className="container my-3">
        <input
          type="search"
          className="form-control"
          id="search"
          value={result}
          onChange={(e) => setResult(e.target.value)}
          placeholder="Search"
        />
      </div>
      {isLoading ? <Loading />
        : filtered.map((all, i) => {
          const pro = getBasicData(all);
          return (
            <Link
              to={`details/${pro.province}`}
              key={pro.province}
              style={linkStyle}
              className="col-6"
            >
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
