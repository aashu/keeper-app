import React from "react";

function Footer() {
  const d = new Date();
  const currentYear = d.getFullYear();

  return (
    <footer>
      <p>copyright {currentYear} </p>
    </footer>
  );
}

export default Footer;
