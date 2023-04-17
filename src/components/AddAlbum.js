import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// Function to add album to the list
const AddAlbum = (props) => {
  // Function to handle save button click
  const handleSave = () => {
    // Get input values for user id and title
    const userId = document.getElementById("aaform-userid-inp").value;
    const title = document.getElementById("aaform-title-inp").value;

    // Call addAlbumToList function passed through props with userId and title parameters
    props.addAlbumToList(Number(userId), title);
  };

  // Render the component
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      {/* Render a link to the home page */}
      <div className="App mt-3 mb-3">
        <Link to="/">
          <button className="btn btn-primary">Home Page</button>
        </Link>
      </div>

      {/* Render a modal dialog to add an album */}
      <Modal.Dialog>
        {/* Render the header of the modal */}
        <Modal.Header>
          <Modal.Title className="text-primary">Add Album</Modal.Title>
        </Modal.Header>

        {/* Render the body of the modal */}
        <Modal.Body>
          <div className="form-group">
            <label className="text-primary">I'd</label>
            <input
              type="number"
              className="form-control mt-2 mb-3"
              id="aaform-userid-inp"
              name="id"
            />
          </div>

          <div className="form-group">
            <label className="text-primary">Title</label>
            <textarea
              rows="3"
              className="form-control mt-2 mb-3"
              id="aaform-title-inp"
              name="title"
            ></textarea>
          </div>
        </Modal.Body>

        {/* Render the footer of the modal */}
        <Modal.Footer>
          <Link to="/">
            {" "}
            <Button variant="success" onClick={handleSave}>
              Add Album{" "}
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default AddAlbum;
