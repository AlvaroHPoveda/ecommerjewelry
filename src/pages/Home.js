import React from "react";
import "../styles/home.css";
import { Screenshot01, Screenshot02, Screenshot03 } from "../image";

const Home = () => {
  return (
    <main className="mainhome">
      <div className="divScreenshot01">
        <img className="Screenshot01" src={Screenshot01} alt="Screenshot01" />
      </div>
      <div className="divScreenshot02">
        <img className="Screenshot02" src={Screenshot02} alt="Screenshot02" />
      </div>
      <div className="divScreenshot03">
        <img className="Screenshot03" src={Screenshot03} alt="Screenshot03" />
      </div>
    </main>
  );
};

export default Home;
