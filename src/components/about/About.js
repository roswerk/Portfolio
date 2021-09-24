import React from "react";
import "./about.css";
import { Button } from "react-bootstrap";
import CV from "../../resources/Rosales-Maximilian-Resume.pdf";

function About() {
  return (
    <div className="mainContainer" id="about">
      <div className="background">
        <div className="photoDiv">
          <img
            src="https://ca.slack-edge.com/T03DJ0G01-U01NEKBSPGX-3789eeff614a-512"
            alt="Maximilians Photo"
            className="photo"
          ></img>
        </div>

        <div className="info">
          <h2>Hello, my name is Maximilian Rosales</h2>
          <p>I'm a Full-Stack Web Developer</p>

          <div className="profileButtons">
            <Button
              variant="outline-light"
              className="infoButton"
              href="https://github.com/roswerk"
              target="_blank"
            >
              Go to GitHub
            </Button>
            <Button
              variant="outline-light"
              className="infoButton"
              href="#projects"
            >
              Go to Projects
            </Button>
            <Button
              variant="outline-light"
              className="infoButton"
              href={CV}
              target="_blank"
            >
              Go to CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
