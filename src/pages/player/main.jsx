const Player = () => {
  return (
    <>
      <video className="w-[37rem] h-80 rounded-lg object-contain">
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          type="video/mp4"
        />
      </video>
    </>
  );
};

export default Player;
