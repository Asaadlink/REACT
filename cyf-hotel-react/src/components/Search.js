import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  console.log(props);
  const [searchInput, setsearchInput] = useState("");
  const handleSearchInput = event => {
    setsearchInput(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.search(searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            onSubmit={event => handleSubmit(event)}
            className="form-group search-box"
          >
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                value={searchInput}
                onChange={event => handleSearchInput(event)}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;