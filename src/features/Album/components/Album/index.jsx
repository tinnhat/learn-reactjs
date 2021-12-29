import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album(props) {
  const { album } = props;
  return (
    <div className="album">
      <p>{album.title}</p>
      <div className="album__thumbnail">
        <img src={album.img} alt={album.title} className="album__img" />
      </div>
    </div>
  );
}

export default Album;
