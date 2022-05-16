import React, { useState } from "react";
import moment from "moment";

const SearchResultsRow = props => {
  const checkIn = moment(props.row.checkInDate);
  const checkOut = moment(props.row.checkOutDate);
  const nights = checkOut.diff(checkIn, "days");

  const [selected, setSelected] = useState("notSelected");
  const selectRow = () => {
    if (selected === "notSelected") {
      setSelected("isSelected");
    } else {
      setSelected("notSelected");
    }
  };
  return (
    <tr className={selected} onClick={selectRow}>
      <td scope="row">{props.row.id}</td>
      <td>{props.row.title}</td>
      <td>{props.row.firstName}</td>
      <td>{props.row.surname}</td>
      <td>{props.row.email}</td>
      <td>{props.row.roomId}</td>
      <td>{props.row.checkInDate}</td>
      <td>{props.row.checkOutDate}</td>
      <td>{nights}</td>
    </tr>
  );
};

export default SearchResultsRow;