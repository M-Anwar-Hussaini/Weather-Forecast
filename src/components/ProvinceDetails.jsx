import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Type from 'prop-types';

export default function ProvinceDetails() {
  const { provinces } = useSelector((store) => store.provinces);

  const { id } = useParams();
  const province = provinces.find((pro) => pro.province === id);
  console.log(id);
  console.log(province);
  return (
    <>
      <h2>Hero</h2>
    </>
  );
}

function SlideItem({ image, text }) {
  return (
    <Carousel.Item>
      <img src={image} className="img-fluid" alt={text} />
      <Carousel.Caption>
        <h5>{text}</h5>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

SlideItem.propTypes = {
  image: Type.string.isRequired,
  text: Type.string.isRequired,
};
