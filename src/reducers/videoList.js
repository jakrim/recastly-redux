import Redux from "redux";
import exampleVideoData from "../data/exampleVideoData";

var sampleData = exampleVideoData;
var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
    case "CHANGE_VIDEO_LIST":
      return Object.assign({}, state, { videoList: action.videos });
    default:
      return state;
  }
};

export default videoListReducer;
