import React from "react";
import "./about.css";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import maxBnW from "../../img/maxBnW.png";

function About() {
  return (
    <div className="AboutMeContainer" id="about">
      <div className="aboutMeCard">
        <div>
          <img src={maxBnW} className="aboutMeImg"></img>
        </div>

        <Card className="softSkills">
          <Card.Body>
            <p className="aboutMeText">
              I’m Max, a JavaScript Full-Stack Web Developer with a background
              in Start-Up Project Development. I have experience working in
              Social Media Marketing and the IoT industry, where I specialized
              in developing companies from the idea to the realization. In my
              role, I was in charge of finding investors, structuring the
              company values and culture, hiring teams, building sales pitches
              and client acquisition processes, and quality assurance of
              services. In recent years, I have shifted my focus more on the
              Technological industry in order to help build products that could
              impact hundreds of thousands of people globally. Merging both my
              tact dealing with people and problems and my technical knowledge,
              I want to work with passionate teams building the next
              Websites/Apps of the future.
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default About;
