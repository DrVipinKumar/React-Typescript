import React from "react";
import "./App.css";
import ChannelInfo from "../components/ChannelInfo";
import PlaylistInfo from "../components/PlaylistInfo";

function App() {
  const lang = ["Java", "Kotlin", "Golang", "React"];
  const videoInfo = {
    golang: 150,
    kotlin: 200,
    java: 100,
    react: 160,
  };
  return (
    <div className="App">
      <ChannelInfo channelName="Dr. Vipin Classes" playlistCount={40}>
        Total Video:600 Plus
      </ChannelInfo>
      <PlaylistInfo lang={lang} totalVideos={videoInfo} />
    </div>
  );
}

export default App;
