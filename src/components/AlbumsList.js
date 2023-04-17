import React from "react";
import List from "./List";
import { Link } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";

// AlbumsList functional component
const AlbumsList = (props) => {
  return (
    <>
      {/* link to add album page */}
      <div className="App mt-3 mb-3">
        <Link to="/add">
          <button className="btn btn-success mx-auto">
            {" "}
            <BsPlusCircleFill className="me-2" /> Add Album
          </button>
        </Link>
      </div>
      {/* container for the album list */}
      <div className="container mt-4">
        <div className="photo-gallery">
          {/* iterate over the albums list and render List component for each album */}
          {props.albums
            .map((album) => {
              return (
                <List
                  album={album}
                  key={album.id}
                  setUpdateAlbum={props.setUpdateAlbum}
                  deleteAlbumFromList={props.deleteAlbumFromList}
                />
              );
            })
            .reverse()}
          {/* reverse the order of albums to display the latest album on top */}
        </div>
      </div>
    </>
  );
};

export default AlbumsList;
