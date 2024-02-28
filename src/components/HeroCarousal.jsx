const HeroCarousal = () => {
  return (
    <main>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/img/maincarousal/1.jpg"
              className="d-block w-100"
              alt="1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/maincarousal/2.jpg"
              className="d-block w-100"
              alt="2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/maincarousal/3.jpg"
              className="d-block w-100"
              alt="3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
};

export default HeroCarousal;
