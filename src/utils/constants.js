// const API_KEY = process.env.VITE_YOUTUBE_API_KEY;
const env = await import.meta.env;
const API_KEY = (env.VITE_YOUTUBE_API_KEY);

export const YOUTUBE_GETVIDEO = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key='+API_KEY;
export const YOUTUBE_VIDEO_BY_ID="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key="+API_KEY;
