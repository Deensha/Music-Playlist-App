import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import musicData from "./musicData.json";

const AlbumDetails = () => {
  let { id } = useParams(); //gets id from album
  console.log("album id from the url:", id);
  let navigate = useNavigate();

  let [musicDetails, setMusicDetails] = useState([]);
  let [currentSong, setCurrentSong] = useState(null);
 useEffect(() => {
  setMusicDetails(musicData.albums || []);
}, []);

  useEffect(() => {
    if (currentSong) {
      const audio = document.querySelector("audio");
      if (audio) {
        audio.load();
        audio.play();
      }
    }
  }, [currentSong]);

  let album = musicDetails.find((a) => a.id == id);
  return (
    <div>
      {album ? (
        <div>
          <h1
            style={{
              color: "purple",
              fontFamily: "Arial,sans-serif",
              fontSize: "150px",
            }}
          >
            {album.title}
          </h1>
          <h2 style={{ color: "grey", fontSize: "50px" }}>
            Artist-{album.artist}
          </h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {album.songs.map((song, index) => (
              <li
                key={song.id}
                style={{
                  cursor: "pointer",
                  marginBottom: "8px",
                  display: "flex", // 👈 add this
                  justifyContent: "space-between",
                }}
                onClick={() => setCurrentSong(song.url)}
              >
                <span>
                  {index + 1}.{song.title}
                </span>
                <Button
                  variant="outline-success"
                  style={{
                                     fontSize: "20px",
                  fontWeight: "bold",
                  width: "40px",
                  height: "40px",
                  lineHeight: "20px",
                  textAlign: "center",
                  border: "2px solid green",
                  borderRadius: "8px",
                  color: "green",
                  backgroundColor: "white",
                  cursor: "pointer",
                  }}
                  title="Add to Playlist"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent song from playing
                    let saved =
                      JSON.parse(localStorage.getItem("playlist")) || [];
                    saved.push(song);
                    localStorage.setItem("playlist", JSON.stringify(saved));

                    navigate("/playlist");
                  }}
                >
                  +
                </Button>
              </li>
            ))}
          </ul>
          {/* Audio player */}

          {currentSong && (
            <div>
              <audio
                controls
                autoPlay
                style={{
                  position: "fixed",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderTop: "1px solid #ccc",
                  zIndex: 1000,
                }}
              >
                <source src={currentSong} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      ) : (
        <p>Loading or album not found</p>
      )}
    </div>
  );
};

export default AlbumDetails;
