import { Carousel } from 'react-bootstrap';

export default function ProvinceHeader() {
  return (
    <Carousel>
      {Array.from({ length: 10 }, (_, i) => i).map((i) => (
        <Carousel.Item key={`Afghanistan${i + 1}`}>
          <img
            src={`./Afghanistan${i + 1}.jpg`}
            className="img-thumbnail"
            alt="Afghanistan Lanscape"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
