import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      title: "Rap việt mới nhất",
      img: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/0/1/6/20160769a6ae4d903a9c3bf369d74925.jpg",
    },
    {
      id: 2,
      title: "More & More",
      img: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/a/3/9/1a390fb194673898d7a97f4f82755213.jpg",
    },
    {
      id: 3,
      title: "Ubarn hits",
      img: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/2/3/d/123df9911f9f91bd8094bddc10127ed5.jpg",
    },
  ];
  return (
    <div>
      <h2>List Album</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
