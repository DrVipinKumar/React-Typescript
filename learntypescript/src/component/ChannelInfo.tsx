// type channelProps = {
//   channelName: string;
// };
interface channelProps {
  channelName: string;
  playlistCount: number;
  noofsubscriptions?: number;
}
function ChannelInfo(props: channelProps) {
  return (
    <div>
      <h2>Welcome to {props.channelName} for learning React with Typescript</h2>
      <h3>
        We also have {props.playlistCount}+ other playlist for learning Android,
        Kotlin, React, & etc.
      </h3>
    </div>
  );
}

export default ChannelInfo;
