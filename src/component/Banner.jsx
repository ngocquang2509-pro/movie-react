import React, { useState, useEffect } from "react";
import Rating from "../assets/rating.png";
import RatingHalf from "../assets/rating-half.png";
import PlayBtn from "../assets/play-button.png";
import data from "../data.json";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Kiểm tra xem data có phải là mảng không
    if (Array.isArray(data)) {
      setMovies(data);
    } else {
      // Nếu data không phải mảng, đưa vào mảng để xử lý thống nhất
      setMovies([data]);
    }
  }, []);

  useEffect(() => {
    // Auto-rotate carousel every 5 seconds
    const interval = setInterval(() => {
      if (movies.length > 1) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  // Hàm điều hướng carousel
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Nếu không có dữ liệu
  if (!movies.length) {
    return <div>Loading...</div>;
  }

  const currentMovie = movies[currentIndex];

  return (
    <>
      <section
        className="banner"
        style={
          currentMovie.backgroundImage
            ? { backgroundImage: `url(${currentMovie.backgroundImage})` }
            : {}
        }
      >
        <div className="container">
          <div className="row banner-content align-items-center">
            <div className="col-lg-6 col-md-6 text-white">
              <span className="feature-badge text-white">
                {currentMovie.category || "TV Show"}
              </span>
              <h1 className="display-4 fw-bold mb-3">{currentMovie.title}</h1>
              <div className="mb-2">
                <div className="d-flex align-items-center">
                  <img src={Rating} alt="" style={{ width: 24 }} />
                  <img src={Rating} alt="" style={{ width: 24 }} />
                  <img src={Rating} alt="" style={{ width: 24 }} />
                  <img src={Rating} alt="" style={{ width: 24 }} />
                  <img src={RatingHalf} alt="" style={{ width: 24 }} />
                  <span className="ms-2">{currentMovie.rating || "4.5"}/5</span>
                </div>
              </div>
              <p className="lead mb-4">{currentMovie.description}</p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-outline-light btn-lg px-4">
                  Xem chi tiết
                </button>
                <button className="btn btn-custom-primary btn-lg text-white px-4">
                  Xem ngay
                </button>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="image-container">
                <img
                  src={currentMovie.posterImage || ImgKSY}
                  className="img-fluid"
                  alt={currentMovie.title}
                />
                <div className="play-button">
                  <img src={PlayBtn} className="play-icon" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls - Chỉ hiển thị khi có nhiều phim */}
        {movies.length > 1 && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              onClick={handlePrev}
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
              onClick={handleNext}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {movies.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={index === currentIndex ? "active" : ""}
                  aria-current={index === currentIndex ? "true" : "false"}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Banner;
