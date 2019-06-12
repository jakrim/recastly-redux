// import Redux from "redux";
// import changeVideo from "../actions/currentVideo";

var init = { video: [] };

var currentVideoReducer = (state = init, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
    case "CHANGE_VIDEO":
      return Object.assign({}, state, { video: action.video });
    default:
      return state;
  }
};

export default currentVideoReducer;
