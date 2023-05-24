import React from "react";

const Main = () => {
  return (
    <div className="w-full h-[80vh] border-2 relative z-1">
      <video
        className="absolute bottom-0 object-cover z-2"
        src="/video/video.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div>
        
      </div>
    </div>
  );
};

export default Main;
