import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";
import "./styles.scss";
AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList(props) {
  const { albumList } = props;
  return (
    <ul className="album-list">
      {albumList &&
        albumList.length > 0 &&
        albumList.map((item) => (
          <li key={item.id} className="album-item">
            <Album album={item} />
          </li>
        ))}
    </ul>
  );
}

export default AlbumList;
