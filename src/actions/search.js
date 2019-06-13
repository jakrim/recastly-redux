import searchYouTube from "../lib/searchYouTube.js";
import changeVideoList from "./videoList.js";
import changeVideo from "./currentVideo.js";
import YOUTUBE_API_KEY from "../config/youtube.js";

var handleVideoSearch = q => {
  var options = {
    key: YOUTUBE_API_KEY,
    query: q
  }
  return function thunk(dispatch) {
    return searchYouTube(options)
      .then(response => response.json())
      .then(data => {
        dispatch(changeVideoList(data.items));
        dispatch(changeVideo(data.items[0]));
      }).catch(error => {
        console.error(error);
      })
  };
};

export default handleVideoSearch;