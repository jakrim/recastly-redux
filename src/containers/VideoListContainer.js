import { connect } from "react-redux";
import VideoList from "./../components/VideoList.js";
import changeVideo from "./../actions/currentVideo.js";

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapStateToProps = store => ({ videos: store.videos });

const mapDispatchToProps = dispatch => ({
  onClick: videos => dispatch(changeVideoList(videos))
});

var VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

export default VideoListContainer;
