import {
  FaAngleLeft, FaMicrophone, FaGear,
} from 'react-icons/fa6';
import {
  FaHome,
} from 'react-icons/fa';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function MyNavbar() {
  const { header } = useSelector((store) => store.provinces);
  return (
    <header>
      <nav className="d-flex align-items-center justify-content-between p-2 shadow">
        <Link to="/">
          {header === 'Afghanistan' ? (
            <FaHome fontSize="24px" color="#fff" />
          ) : (
            <FaAngleLeft fontSize="24px" color="#fff" />
          )}
        </Link>
        <h3>{header}</h3>
        <div className="d-flex gap-4">
          <FaMicrophone fontSize="24px" cursor="pointer" />
          <FaGear fontSize="24px" cursor="pointer" />
        </div>
      </nav>
    </header>
  );
}
