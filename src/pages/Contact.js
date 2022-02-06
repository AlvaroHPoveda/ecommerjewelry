import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <main className="mainContact">
      <div className="divContact01">
        <h1>Contact</h1>
      </div>
      <div className="divContact02">
        <p>For all customer and sales inquiries, please contact:</p>
        <p>
          Customer service
          <br />
          email@example.com
        </p>
        <p>
          Wholesale inquiries
          <br />
          email@example.com
        </p>
        <p>
          Press inquiries
          <br />
          email@example.com
        </p>
        <p>Follow us</p>
        <div>
          <a
            className="redesIcon"
            href="https://www.instagram.com/accounts/login/?next=/academlohq/"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="redesIcon"
            href="https://yt3.ggpht.com/ytc/AKedOLSm2IwzXy8wXwDP7AvkrSYwHT8H333_WRW0Oyff=s176-c-k-c0x00ffffff-no-rj-mo"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
