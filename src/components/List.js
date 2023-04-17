import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const List = (props) => {
  return (
    <div className="pic place zoom-effect ">
      <div className=" p-2 mt-5">
        {/* Album ID */}
        <span className="id card-header card-head2 h2 text-red">{props.album.id}</span>

        {/* Edit and Delete Buttons */}
        <div className="float-end  shadow-sm me-2">
          {/* Edit Button */}
          <Link to="/update">
            <Button variant="me-3">
              <FiEdit
                className="icon-edit"
                onClick={() => props.setUpdateAlbum(props.album)}
              />
            </Button>
          </Link>
          {/* Delete Button */}
          <Button variant="me-3">
            {" "}
            <RiDeleteBin2Fill
              className="icon-del"
              onClick={() => props.deleteAlbumFromList(props.album.id)}
            />
          </Button>
        </div>

        <h5 className="mt-4 list  mb-1 ">{props.album.title}</h5>
      </div>
    </div>
  );
};
export default List;
