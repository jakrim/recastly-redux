import React from "react";
import VideoList from "./VideoList.js";
import VideoPlayer from "./VideoPlayer.js";
import Search from "./Search.js";

var App = props => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        <Search />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer />
      </div>
      <div className="col-md-5">
        <VideoList />
      </div>
    </div>
  </div>
);

export default App;

// getYouTubeVideos(query) {
//   var options = {
//     key: this.props.API_KEY,
//     query: query
//   };

//   this.props.searchYouTube(options, (videos) =>
//     this.setState({
//       videos: videos,
//       currentVideo: videos[0]
//     })
//   );
// }
