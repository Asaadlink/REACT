import React from "react";
import Heading from "./components/Heading";
import Bookings from "./components/Bookings";
import Restaurant from "./components/Restaurant";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import "./App.css";
const App = () => {
  const footerData = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer
        array={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
