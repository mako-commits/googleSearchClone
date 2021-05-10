import React from "react";
import "./Footer.css";

function footer() {
  return (
    <div class="footer">
      <p className="footer__title">
        Coded with{" "}
        <span role="img" aria-label="heart">
          &#128153;
        </span>{" "}
        by{" "}
        <a
          href="https://mk-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pythagoras-Dev
        </a>
      </p>
    </div>
  );
}

export default footer;
