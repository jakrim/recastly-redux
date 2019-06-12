import { connect } from "react-redux";
import VideoPlayer from "../components/VideoPlayer.js";
import changeVideo from "../actions/currentVideo";

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
const mapStateToProps = store => ({
  currentVideo: store.currentVideo
});

const mapDispatchToProps = dispatch => ({
  onClick: currentVideo => dispatch(changeVideo(currentVideo))
});

const VideoPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);

export default VideoPlayerContainer;
