import React from "react";

const WatchConatiner = ({videoId}) => {
  return (
    <div className="rounded-lg">
      <iframe
      className=" rounded-lg"
        id="player"
        type="text/html"
        width="800"
        height="460"
        src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1`}
      ></iframe>
    </div>
  );
};

export default WatchConatiner;
