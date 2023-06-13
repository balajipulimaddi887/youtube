const API_KEY = "AIzaSyC5BHm_Ce_uO6u7YZIy0VyNRhBcS2ZeLwo";

export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SUGGESTSIONS_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const CORS_PROXY_URL = "https://corsproxy.io/?";

export const getVideosByVideoId = (videoId) =>
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&relatedToVideoId=" +
  videoId +
  "&type=video&key=" +
  API_KEY;

export const getVideosByKeyword = (keyword) =>
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
  keyword +
  "&key=" +
  API_KEY;

export const OFFSET_LIVE_CHAT = 100;
