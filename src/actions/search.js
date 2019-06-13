import searchYouTube from "../lib/searchYouTube.js";
import changeVideoList from "./videoList.js";
import changeVideo from "./currentVideo.js";
import YOUTUBE_API_KEY from "../config/youtube.js";

var handleVideoSearch = q => {
  var options = {
    key: YOUTUBE_API_KEY,
    query: q
  }

  //TODO:  Write an asynchronous action to handle a video search!
  return function thunk(dispatch) {
    return searchYouTube(options, data => {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  };
};

export default handleVideoSearch;

// type: "CHANGE_VIDEO_LIST",
//   videos: videos
