import React from "react";

var Search = props => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={props.handleInputChange}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search" />
    </button>
  </div>
);

export default Search;
