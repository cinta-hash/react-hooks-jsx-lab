import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
  <h2>About Me</h2>
  <p>A developer is an individual that builds and create software and applications. He or she writes, debugs and executes the source code of a software application. A developer is also known as a software developer, computer programmer, programmer, software coder or software engineer</p>
  <img src = { image} alt = "I made this"/>
  </div>;
}

export default About;
