import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ProvinceDetails from './ProvinceDetails';

export default function TheRouter() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ProvinceDetails />} />
      </Routes>
    </main>
  );
}
