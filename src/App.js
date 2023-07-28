import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Province from './components/Province';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Province province="Kabul" icon="04d" temprature={34} isLoading />
    </>
  );
}
