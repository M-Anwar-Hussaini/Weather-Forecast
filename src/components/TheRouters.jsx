import { Route, Routes } from 'react-router-dom';

export default function TheRouter() {
  return (
    <main>
      <Routes>
        <Route path="/" />
        <Route path="/details" />
      </Routes>
    </main>
  );
}
