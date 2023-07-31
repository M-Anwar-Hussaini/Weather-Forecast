import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getDetailedData } from '../redux/helper';
import { getApiData } from '../redux/slice';
import Loading from './Loading';

export default function ProvinceDetails() {
  const { provinces, isLoading } = useSelector((store) => store.provinces);
  const dispatch = useDispatch();
  useEffect(() => {
    if (provinces.length === 0) dispatch(getApiData());
  }, [dispatch, provinces.length]);
  const { id } = useParams();

  if (isLoading || provinces.length === 0) {
    return <Loading />;
  }

  const desired = provinces.find((el) => el.name === id);
  const details = getDetailedData(desired);
  const keys = Object.keys(details);

  return (
    <ul className="m-0 p-0">
      {keys.map((key, i) => (
        <li key={key} className={`p-4 ${i % 2 === 1 || 'bgcolor-dark'}`}>
          <div className="row">
            <span className="col fw-bold">{key}</span>
            <span className="col">{details[key]}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
