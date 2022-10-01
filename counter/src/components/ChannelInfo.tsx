interface ChannelInfoProps {
  channelName: string;
  playlistCount: number;
  subscriber?: number;
  children: string;
}

const ChannelInfo = (props: ChannelInfoProps) => {
  return (
    <div>
      <h2>Welcome to React with Typescript on {props.channelName}</h2>
      <h3>We have {props.playlistCount} plus playlist on this channel</h3>
      {props.children}
    </div>
  );
};

export default ChannelInfo;
