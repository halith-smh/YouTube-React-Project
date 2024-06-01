import VideoCard from "./VideoCard";
import usePopularVideo from "../hooks/usePopularVideo";
import { useSelector } from "react-redux";

const VideoConatiner = () => {
  usePopularVideo();

  const data = useSelector((store) => store.popularVideos.data);

  return data && (
    <div className="p-1 my-4 gap-8 flex flex-wrap overflow-scroll no-scrollbar  h-[80vh]">
      {data.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoConatiner;
