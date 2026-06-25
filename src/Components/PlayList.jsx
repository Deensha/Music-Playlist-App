import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const PlayList = () => {


   let[playlist,setPlaylist]=useState([])
   let [currentSong, setCurrentSong] = useState(null);

   useEffect(()=>{
    // Fetch songs from localStorage when page loads
    let saved = JSON.parse(localStorage.getItem("playlist")) || [];
    setPlaylist(saved);
   
   },[])

  // remove a song from the playlist
  const removeSong = (index) => {
    let updated = [...playlist];
    updated.splice(index, 1); // remove one song at that index
    setPlaylist(updated);
    localStorage.setItem("playlist", JSON.stringify(updated)); // update localStorage
  };
   
   
  return (
    <div style={{padding:"20px",fontFamily:"sans-serif"}}>
      <h2 style={{textAlign:"center"}}>My Playlist🎶</h2>

    {playlist.length===0 ? (
      <p style={{textAlign:"center"}}>No Songs yet Added</p>
    ):(
      <>
      <ul>
      {playlist.map((song,index)=>( 
        
      <li key={index} style={{marginBottom:"5px",display:"flex",
          alignItems:"center",
          justifyContent:"space-between",
          padding:"10px 0"}}>
  <span
                onClick={() => setCurrentSong(song.url)}
                style={{
                  fontSize: "16px",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
              >
                {song.title}
              </span>

      <Button variant="danger"
                  style={{
                   fontSize: "20px",
    fontWeight: "bold",
    width: "40px",
    height: "40px",
    border: "none",
    borderRadius: "50px",
    color: "white",
    backgroundColor: "skyblue",
    cursor: "pointer",
    padding: 0,              // Add this
    display: "flex",         // Add this
    alignItems: "center",    // Add this
    justifyContent: "center", // Add this
    flexShrink: 0 
      
                  }}
                  title="remove from playlist"
                  onClick={()=>removeSong(index)}>-</Button>
      
      </li>
     

      ))}
     
      </ul>
     {/* Audio Player */}
      {currentSong && (
        <div style={{
          position:"fixed",
          bottom:"20px",
          left:"50%",
          transform:"translateX(-50%)",
          backgroundColor:"white",
          padding:"15px",
          borderRadius:"10px",
          boxShadow:"0 4px 6px rgba(0,0,0,0.1)",
          zIndex:1000
        }}>
          <audio 
            src={currentSong} 
            controls 
            autoPlay
            style={{width:"300px"}}
          />
        </div>
      )}
      </>
    )}
 
      
    
    </div>
  )
}

export default PlayList