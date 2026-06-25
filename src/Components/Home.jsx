import React, { useEffect, useState } from "react";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import musicData from "./musicData.json";

const Home = () => {
  const [albums, setAlbums] = useState([]); // store albums here

  let navigate =useNavigate()


  let handleAlbumClick=(albumId)=>{
    navigate(`/album/${albumId}`)
  }
 useEffect(() => {
  setAlbums(musicData.albums || []);
}, []);

  return (
    <div className="home-container">
      <Container>
        <h1 className="home-title">Search for Songs</h1>
        <Form className="d-flex search-form-home">
          <FormControl
            type="search"
            placeholder="Search songs, artists, albums"
            aria-label="Search"
            className="search-input-home"
          />
          <Button variant="primary" className="search-btn-home">
            Search
          </Button>
        </Form>
<h2>Albums</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            padding: "20px 0",
          }}
        >
          
          {albums.map((album) => (
            <div
              key={album.id}
              onClick={()=>handleAlbumClick(album.id)}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
                cursor:"pointer"
              }}
            >
              <h3 style={{color:"darkred"}}>{album.title}</h3>
              {album.cover && (
                <img
                  src={album.cover} // add full path if needed
                  alt={album.title}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              )}
              <div>
              Artist Name
              <h4 style={{color:"mediumgrey"}}>{album.artist}</h4>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
