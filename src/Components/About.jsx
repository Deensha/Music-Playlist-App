import React from "react";
// import "./About.css";

const About = () => {
  return (
    <div style={{
        padding: "30px",
        maxWidth: "700px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}>
      <h1 style={{ textAlign: "center", marginBottom: "15px" }}>About VibeFlow</h1>

      <p style={{ marginBottom: "15px" }}>
        Welcome to <b>VibeFlow</b> — a dynamic and interactive music playlist web
        application built using <b>React.js</b> and <b>JSON Server</b>. VibeFlow
        brings you an enjoyable way to discover, listen, and manage your favorite
        songs — all in one clean and user-friendly platform.
      </p>

      

      <h2 style={{ marginTop: "25px" }}>Specialties</h2>
      <ul style={{ marginLeft: "20px" }}>
        <li>🎧 Built-in audio player for instant and smooth playback</li>
        <li>❤️ Create, view, and modify your personalized playlist easily</li>
        <li>🎶 Browse albums, explore tracks, and enjoy curated collections</li>
        <li>⚡ Fast, responsive performance powered by React Hooks and useEffect</li>
        <li>💾 LocalStorage integration to save playlists even after page refresh</li>
        <li>🔄 Real-time data rendering from JSON Server for a realistic app feel</li>
      </ul>

      <h2 style={{ marginTop: "25px" }}>Purpose</h2>
      <p>
        <b>VibeFlow</b> was designed as a passion project to combine music with modern
        web technology. It demonstrates how React can manage user interfaces and
        application states efficiently while integrating with a backend API for
        seamless data interaction.
      </p>

    

      <h2 style={{ marginTop: "25px" }}>Future Enhancements</h2>
      <ul style={{ marginLeft: "20px" }}>
        <li>🌍 Add a global music search and filter system</li>
        <li>📱 Introduce dark/light mode toggle for better accessibility</li>
        <li>⭐ Implement user authentication for personalized accounts</li>
        <li>🎤 Integrate voice commands to control playback</li>
      </ul>
    </div>
  );
};

export default About;

