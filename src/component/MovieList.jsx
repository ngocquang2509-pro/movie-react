import React from "react";
import phim from "../assets/phim.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-modal";
Modal.setAppElement("#root");
import YouTube from "react-youtube";
const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const MovieList = ({ title, data }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [TrailerKey, setTrailerKey] = React.useState("");
  const openModal = async (id) => {
    setIsOpen(true);
    setTrailerKey("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      setTrailerKey(data.results[0].key);
    } catch (error) {
      console.log(error);
    }
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="p-5 mb-5 text-light">
      <h4 className="text-uppercase mb-4">{title}</h4>
      <Carousel
        className="d-flex align-items-center gap-4"
        responsive={responsive}
      >
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div
              onClick={() => openModal(item.id)}
              key={item.id}
              className="position-relative opacity-75 hover-zoom"
              style={{ width: "200px", height: "300px", cursor: "pointer" }}
            >
              <img
                src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                alt={item.title}
                className="w-100 h-100 rounded-3"
                style={{ objectFit: "cover" }}
              />
              <p className=" text-center text-uppercase ">
                {item.title || item.original_title}
              </p>
            </div>
          ))}
      </Carousel>
      <Modal
        style={{
          overlay: {
            position: "fixed",
            zIndex: 9999,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <YouTube videoId={TrailerKey} opts={opts} />
      </Modal>
    </div>
  );
};

export default MovieList;
