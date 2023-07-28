import WeatherIcon from 'react-open-weather-icons';
import Type from 'prop-types';
import ReactLoading from 'react-loading';

export default function Province({
  province, icon, temprature, isLoading, className,
}) {
  return (
    <figure className={`p-3 m-0 ${className}`} id="province">
      {
          isLoading ? (
            <div className="d-flex align-items-center justify-content-center">
              <ReactLoading type="spokes" />
            </div>
          )
            : (
              <div className="row align-items-center justify-content-between">

                <span className="col-5 fs-5 fw-bold">{province}</span>
                <WeatherIcon name={icon} className="weather-icon col-2" />
                <span className="col-5">
                  Temprature:&nbsp;
                  {temprature}
                  &deg;C
                </span>
              </div>
            )
        }
    </figure>
  );
}

Province.propTypes = {
  province: Type.string.isRequired,
  icon: Type.string.isRequired,
  temprature: Type.number.isRequired,
  isLoading: Type.bool.isRequired,
  className: Type.bool.isRequired,
};
