import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_GETVIDEO } from "../utils/constants";
import { addPopulaVideo } from "../store/slice/popularVideo";
import { useEffect } from "react";

const usePopularVideo = () => {
  const data = useSelector((store) => store.popularVideos.data);

  const dispatch = useDispatch();

  const fetchPoularVideos = async () => {
    if (!data) {
      const data = await fetch(YOUTUBE_GETVIDEO);
      const results = await data.json();

      // console.log(results);
      dispatch(addPopulaVideo(results));
    }
  };
  useEffect(() => {
    fetchPoularVideos();
  }, []);
};

export default usePopularVideo;
