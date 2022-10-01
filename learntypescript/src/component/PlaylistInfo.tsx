interface PlaylistInfoProps {
  lang: string[];
  videos: {
    java: number;
    kotlin: number;
    golang: number;
    react: number;
  };
  username: "Dr. Vipin Classes" | "Dr. Vipin Teotia" | "Guest";
}

const PlaylistInfo = (props: PlaylistInfoProps) => {
  return (
    <div className="text-start">
      <h2> Welcome {props.username}</h2>
      <h2>We have playlist on following languages</h2>
      <ol>
        {props.lang.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ol>
      <h2>We have number of videos on following languages</h2>
      <ol>
        <li>on Java: {props.videos.java}</li>
        <li>on Kotlin: {props.videos.kotlin}</li>
        <li>on Golang: {props.videos.golang}</li>
        <li>on React: {props.videos.react}</li>
      </ol>
    </div>
  );
};

export default PlaylistInfo;
