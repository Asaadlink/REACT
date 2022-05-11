import React from "react";
import fakeBookings from "../data/fakeBookings";
import moment from "moment";
console.log(fakeBookings);

const SearchResults = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">First name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">nights to stay</th>
        </tr>
      </thead>

      <tbody>
        {fakeBookings.map(booking => {
          const checkIn = moment(booking.checkInDate);
          const checkOut = moment(booking.checkOutDate);
          const nightsCalculation = checkOut.diff(checkIn, "days");
          return (
            <tr>
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>

              <td>{nightsCalculation}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;