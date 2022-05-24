import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/error`)
      .then(res => {
        if (res.status != 200) {
          alert("it's not a 404 error but it's an error with data ");
        }
        return res.json();
      })
      .then(data => {
        setBookings(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const search = searchVal => {
    const bookingsFiltered = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(bookingsFiltered);
  };

  return (
    <div className="App-content">
      {bookings.length > 0 ? (
        <div className="container">
          <Search search={search} />

          <SearchResults results={bookings} />
        </div>
      ) : null}
    </div>
  );
};

export default Bookings;