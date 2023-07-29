import WeatherIcon from 'react-open-weather-icons';
import Type from 'prop-types';
import { FaLocationDot, FaTemperatureArrowUp } from 'react-icons/fa6';

export default function Province({
  province, icon, temprature, className, description,
}) {
  return (
    <figure className={`px-1 py-3 m-0 ${className}`} id="province">
      <div className="row align-items-center justify-content-between">

        <div className="col-5">
          <div className="d-flex gap-2 align-items-center">
            <FaLocationDot fontSize={24} />
            <span className="fs-5 fw-bold">{province}</span>
          </div>
        </div>

        <div className="col-3 d-flex flex-column align-items-center">
          <WeatherIcon name={icon} className="weather-icon" />
          <span>{description}</span>
        </div>

        <div className="col-4 d-flex align-items-center gap-2">
          <FaTemperatureArrowUp fontSize={24} />
          <span>
            {temprature}
            &deg;C
          </span>
        </div>
      </div>
    </figure>
  );
}

Province.propTypes = {
  province: Type.string.isRequired,
  icon: Type.string.isRequired,
  temprature: Type.number.isRequired,
  className: Type.string.isRequired,
  description: Type.string.isRequired,
};
