import { connect } from "react-redux";
import Search from "./../components/Search.js";
import handleVideoSearch from "../actions/search.js";

var mapDispatchToProps = dispatch => ({
  handleSearchInputChange: event => dispatch(handleVideoSearch(event))
});

export default connect(
  undefined,
  mapDispatchToProps
)(Search);;
