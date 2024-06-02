import React from "react";
import CommentSection from "./CommentSection";
import LiveChat from "./LiveChat";

const WatchConatiner = ({ videoId }) => {
  return (
    <div className="flex">
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
      <LiveChat />
    </div>
  );
};

export default WatchConatiner;
