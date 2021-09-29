import React from "react";
import "./home.css";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CV from "../../resources/Rosales-Maximilian-Resume.pdf";
import { LinkContainer } from "react-router-bootstrap";
// import { Link } from "react-bootstrap";
import me from "../../img/me.png";

import About from "../about/About";

function Home() {
  return (
    <div className="mainContainer" id="home">
      <div className="background">
        {/* Photo */}
        <div className="photoDiv">
          <img
            src="https://ca.slack-edge.com/T03DJ0G01-U01NEKBSPGX-3789eeff614a-512"
            alt="Maximilians Photo"
            className="photo"
          ></img>
        </div>

        <div className="infoText">
          {/* Name and buttons */}
          <div className="info">
            <h2>
              Hello, I'm <strong>Max Rosales</strong>
            </h2>
            <p>I'm a Project-Manager-turned-Full-Stack Web Developer</p>
          </div>

          {/* About Me text */}
          <div className="snapAboutMe">
            {/* <h2>Who i am</h2> */}
            <Card className="softSkills">
              <Card.Body>
                <p className="softSkillsText">
                  Creativity, curiosity and drive as a vehicle to get things
                  done. <br />
                  {/* <a href="/about">Read More</a> */}
                  <LinkContainer to="/about">
                    <a>Read More</a>
                  </LinkContainer>
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="profileButtons">
            <Button
              variant="outline-light"
              className="infoButton"
              href="https://github.com/roswerk"
              target="_blank"
            >
              GitHub
            </Button>
            <LinkContainer to="/projects">
              <a className="infoButton btn btn-outline-light">Projects</a>
            </LinkContainer>
            <Button
              variant="outline-light"
              className="infoButton"
              href={CV}
              target="_blank"
            >
              CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
