import { connect } from "react-redux";
import VideoPlayer from "../components/VideoPlayer.js";
import changeVideo from "../actions/currentVideo";

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
var VideoPlayer = <VideoPlayer {...props} />;

const mapStateToProps = store => ({
  video: store.video
});

const mapDispatchToProps = dispatch => ({
  onClick: video => dispatch(changeVideo(video))
});

VideoPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);

export default VideoPlayer;
