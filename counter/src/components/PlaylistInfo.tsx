interface PlaylistInfoProps {
  lang: string[];
  totalVideos: {
    golang: number;
    kotlin: number;
    java: number;
    react: number;
  };
}

const PlaylistInfo = (props: PlaylistInfoProps) => {
  return (
    <div className="text-start">
      <h2>I have playlist on following languages</h2>
      <ol>
        {props.lang.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ol>
      <h2>and I have number of videos on following languages</h2>
      <ol>
        <li>Golang:{props.totalVideos.golang}</li>
        <li>Kotlin:{props.totalVideos.kotlin}</li>
        <li>Java:{props.totalVideos.java}</li>
        <li>React:{props.totalVideos.react}</li>
      </ol>
    </div>
  );
};

export default PlaylistInfo;
