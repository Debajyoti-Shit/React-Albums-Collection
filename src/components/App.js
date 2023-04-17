import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AddAlbum from "./AddAlbum";
import AlbumsList from "./AlbumsList";
import UpdateAlbum from "./UpdateAlbum";
import Navbar from './Navbar';

function App() {
  // State to store the albums fetched from the API
  const [albums, setAlbums] = useState([]);

  // State to store the album being updated, initially an empty object
  const [updateAlbum, setUpdateAlbum] = useState({});


  // Fetches the albums data from the API on initial load
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => response.json())
        .then((json) => json);
      setAlbums(data);
    };
    fetchData();
  }, []);



  // Handler function to delete an album from the list and the API
  const deleteAlbumFromList = (id) => {
    // Send a DELETE request to the API to delete the album
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    });
    const newAlbums = albums.filter((album) => album.id !== id);
    // Show an alert to indicate that the album was deleted successfully
    alert(" Album Deleted ");
    setAlbums(newAlbums);
  };


  // Handler function to update an album in the list and the API
  const updateAlbumInList = async (id, updateTitle, updateUserid, oldAlbum) => {
    const albumsCopy = [...albums];
    const index = albumsCopy.indexOf(oldAlbum);
    let updatedAlbum = [];

    // If the album ID is less than 100, update the album data in the API as well
    if (id < 100) {
      updatedAlbum = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`,
        {// Send a PUT request to the API to put the album
          method: "PUT",
          body: JSON.stringify({
            userId: updateUserid,
            id: id,
            title: updateTitle,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((response) => response.json())
        .then((json) => json);
    } // If the album ID is 100 or greater, update the album data in the state only
    else {
      updatedAlbum = {
        userId: updateUserid,
        id: id,
        title: updateTitle,
      };
    }
    albumsCopy[index] = updatedAlbum;
    setAlbums(albumsCopy);
    // Show an alert to indicate that the album was updateed successfully
    alert("Update Album");
  };




  // Handler function to add an album to the list and the API
  const addAlbumToList = (userId, title) => {
    // Send a POST request to the API to add the album
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        id: albums.length + 1,
        title: title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => json);
    // Add the album to the local albums state
    const album = {
      userId: userId,
      id: albums.length + 1,
      title: title,
    };
    setAlbums([...albums, album]);
    // Show an alert to indicate that the album was added successfully
    alert(" Album added successfully");
  };

  
  return (
    <>
      <Navbar path="/" />
      <Routes>
        <Route
          path="/"
          element={
            <AlbumsList
              albums={albums}
              setUpdateAlbum={setUpdateAlbum}
              deleteAlbumFromList={deleteAlbumFromList}
            />
          }
        ></Route>

        <Route
          path="/add"
          element={
            <AddAlbum
              addAlbumToList={addAlbumToList}
            />
          }
        ></Route>

        <Route
          path="/update"
          element={
            <UpdateAlbum
              album={updateAlbum}
              updateAlbumInList={updateAlbumInList}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
