import React from "react";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = props => {
  console.log("props", props.results);
  return (
    <div>
      SearchResults
      <table class="table">
        <thead>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">number of nights</th>
        </thead>
        <tbody>
          {props.results.map(result => (
            <SearchResultsRow row={result} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;