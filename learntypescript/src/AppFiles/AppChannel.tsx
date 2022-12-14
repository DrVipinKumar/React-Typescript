import React from "react";
import "./App.css";
import ChannelInfo from "../component/ChannelInfo";
import PlaylistInfo from "../component/PlaylistInfo";

function App() {
  const lang = ["Java", "Kotlin", "Golang", "React"];
  const numberofVideos = {
    java: 100,
    kotlin: 200,
    golang: 150,
    react: 150,
  };
  return (
    <div className="App">
      <ChannelInfo channelName="Dr. Vipin Classes" playlistCount={40} />
      <PlaylistInfo
        username="Dr. Vipin Teotia"
        lang={lang}
        videos={numberofVideos}
      />
    </div>
  );
}

export default App;
