import { connect } from "react-redux";
import VideoList from "./../components/VideoList.js";
import changeVideo from "./../actions/currentVideo.js";
import changeVideoList from "./../actions/videoList.js";

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapStateToProps = store => ({ videos: store.videos });

const mapDispatchToProps = dispatch => ({
  handleVideoListEntryTitleClick: videos => dispatch(changeVideoList(videos))
});

const VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

export default VideoListContainer;
