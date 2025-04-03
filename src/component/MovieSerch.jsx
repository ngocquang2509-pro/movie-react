import React from "react";
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

const MovieSerch = ({ title, data }) => {
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
      console.log("TrailerKey");
    } catch (error) {
      console.log(error);
    }
  };
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="p-5 mb-5 text-light">
      <h4 className="text-uppercase mb-4">{title}</h4>
      <div className="row row-cols-3 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
        {data &&
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
            </div>
          ))}
      </div>
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

export default MovieSerch;
