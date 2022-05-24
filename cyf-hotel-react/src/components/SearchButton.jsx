import React from "react";

export function SearchButton(props) {
  return (
    <button onClick={props.onClick} className="btn btn-primary">
      {props.buttonText}
    </button>
  );
}

export default SearchButton;