import WeatherIcon from 'react-open-weather-icons';
import Type from 'prop-types';
import ReactLoading from 'react-loading';

export default function Province({
  province, icon, temprature, isLoading,
}) {
  return (
    <figure className="p-3 bgcolor-dark" id="province">
      {
          isLoading ? (
            <div className="d-flex align-items-center justify-content-center">
              <ReactLoading type="spokes" />
            </div>
          )
            : (
              <div className="d-flex align-items-center justify-content-between">

                <h2>{province}</h2>
                <WeatherIcon name={icon} className="weather-icon" />
                <span>
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
};
