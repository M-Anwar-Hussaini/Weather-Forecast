export default function Hero() {
  return (
    <div className="container py-3">
      <div className="row align-items-center">
        <div className="col">
          <img src="afghanistan.png" alt="Afghanistan" className="img-thumbnail" />
        </div>
        <div className="col">
          <h2 className="d-flex flex-column">
            <span>Afghanistan&apos;s</span>
            <span className="text-warning">Weather</span>
            <span>Forecast</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
