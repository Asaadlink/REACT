import React from "react";
const Footer = props => {
  return (
    <div>
      <footer>
        <ul>
          {props.array.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};
export default Footer;