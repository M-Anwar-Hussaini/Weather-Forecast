import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProvinceHeader from './ProvinceHeader';

export default function ProvinceDetails() {
  const { provinces } = useSelector((store) => store.provinces);

  const { id } = useParams();
  const province = provinces.find((pro) => pro.province === id);
  console.log(province);
  return (
    <main className="p-3">
      <ProvinceHeader />
    </main>
  );
}
