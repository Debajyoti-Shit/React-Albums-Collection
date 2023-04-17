import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UpdateAlbum = (props) => {
  // function to handle the update of an album
  const handleUpdate = () => {
    const id = props.album.id;
    let updateTitle = document.getElementById("title-inp").value;
    let updateUserid = document.getElementById("userid-inp").value;

    // if the user didn't enter a title or user id, use the existing ones

    if (updateTitle === "") {
      updateTitle = props.album.title;
    }
    if (updateUserid === "") {
      updateUserid = props.album.userId;
    }
    // call the parent component's updateAlbumInList function to update the album in the list

    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  };

  return (
    <div className="modal show" style={{ display: "block", position: "initial" }}>
      {/* header and link to home page */}
      <div className="App mt-3 mb-3">
        <Link to="/">
          <button className="btn btn-primary">Home Page</button>
        </Link>
      </div>

      {/* modal dialog for updating album */}
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title className="text-primary">Update Album</Modal.Title>
        </Modal.Header>

        {/* form for entering album details */}
        <Modal.Body>
          <div className="form-group">
            <label className="text-primary">I'd</label>
            <input
              type="number"
              className="form-control mt-2 mb-3"
              id="userid-inp"
              name="id"
            />
          </div>

          <div className="form-group">
            <label className="text-primary">Title</label>
            <textarea
              rows="3"
              className="form-control mt-2 mb-3"
              id="title-inp"
              name="title"
            ></textarea>
          </div>
        </Modal.Body>

        <Modal.Footer>
          {/* button to update album */}
          <Link to="/">
            {" "}
            <Button variant="primary" onClick={handleUpdate}>Update Album</Button>
          </Link>
        </Modal.Footer>

      </Modal.Dialog>
    </div>
  );
};

export default UpdateAlbum;
