import React from "react";
import {Screenshot04} from '../image' 
import "../styles/about.css";

const About = () => {
  return <main className="mainAbout">
    <div className="divabout01">
      <h1>Inspired by Nature</h1>
      <p>Friends Natasha Drew and Maya Rahim founded Anise in 2014 with their refreshingly directional, sustainable and deeply personal approach to creating fine jewelry.</p>
      <p>Each of their collections features compellingly simple rings and pendent necklaces with hand-carved textures, and captivating clean lines. With a commitment to sustainability, all pieces are locally made from responsibly sourced 18k Gold and 925 Sterling Silver.</p>
    </div>
    <div className="divabout02">
      <img className="imgAbout" src={Screenshot04} alt="Screenshot04" />
    </div>
  </main>;
};

export default About;
