import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Details from './Details';

export default function TheRouter() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </main>
  );
}
