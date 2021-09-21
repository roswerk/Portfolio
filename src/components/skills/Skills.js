import React from "react";
import "./skills.css";
import Card from "react-bootstrap/Card";

function Skills() {
  return (
    <div className="skillsMainContainer">
      <div className="photoDiv">
        {/* <img src="https://image.flaticon.com/icons/png/512/79/79448.png" alt="Image of a worker" className="skillsImg"></img> */}
      </div>

      <div className="infoSkills">
        <h2>Tech Stack</h2>
        <Card className="frontEndSkillsCard">
          <Card.Body>
            <h3>Front-End:</h3>
            <p className="frontEnd skills">
              <img src="https://img.shields.io/badge/HTML-1F1F1F?style=for-the-badge&logo=HTML5" />
              <img src="https://img.shields.io/badge/CSS-1F1F1F?style=for-the-badge&logo=CSS3&logoColor=2965F1" />
              <img src="https://img.shields.io/badge/Sass-1F1F1F?style=for-the-badge&logo=Sass" />
              <img src="https://img.shields.io/badge/JavaScript-1F1F1F?style=for-the-badge&logo=JavaScript" />
              <img src="https://img.shields.io/badge/TypeScript-1F1F1F?style=for-the-badge&logo=TypeScript" />
              <img src="https://img.shields.io/badge/jQuery-1F1F1F?style=for-the-badge&logo=jQuery&logoColor=37A2EA" />
              <img src="https://img.shields.io/badge/Bootstrap-1F1F1F?style=for-the-badge&logo=Bootstrap&logoColor=8E6AC8" />
              <img src="https://img.shields.io/badge/Material-1F1F1F?style=for-the-badge&logo=Material-Design&logoColor=FFFFFF" />
              <img src="https://img.shields.io/badge/React-1F1F1F?style=for-the-badge&logo=React" />
              <img src="https://img.shields.io/badge/Angular-1F1F1F?style=for-the-badge&logo=Angular&logoColor=DD0031" />
              <img src="https://img.shields.io/badge/Redux-1F1F1F?style=for-the-badge&logo=Redux&logoColor=764ABC" />
            </p>
          </Card.Body>
        </Card>

        <Card className="frontEndSkillsCard">
          <Card.Body>
            <h3>Back-End:</h3>

            <p className="backEnd skills">
              <img src="https://img.shields.io/badge/Node.js-1F1F1F?style=for-the-badge&logo=Node.js" />
              <img src="https://img.shields.io/badge/MongoDB-1F1F1F?style=for-the-badge&logo=MongoDB" />
              <img src="https://img.shields.io/badge/PostgreSQL-1F1F1F?style=for-the-badge&logo=PostgreSQL&logoColor=007ACC" />
              <img src="https://img.shields.io/badge/MySQL-1F1F1F?style=for-the-badge&logo=MySQL&logoColor=FF9900" />
              <img src="https://img.shields.io/badge/Firebase-1F1F1F?style=for-the-badge&logo=Firebase" />
            </p>
          </Card.Body>
        </Card>

        <Card className="frontEndSkillsCard">
          <Card.Body>
            <h3>Other Web Dev skills:</h3>

            <p className="othersSkills skills">
              <img src="https://img.shields.io/badge/Git-1F1F1F?style=for-the-badge&logo=Git" />
              <img src="https://img.shields.io/badge/AWS-1F1F1F?style=for-the-badge&logo=Amazon-AWS&logoColor=FF9900" />
              <img src="https://img.shields.io/badge/GCP-1F1F1F?style=for-the-badge&logo=Google-Cloud" />
              <img src="https://img.shields.io/badge/Vercel-1F1F1F?style=for-the-badge&logo=Vercel" />
              <img src="https://img.shields.io/badge/Heroku-1F1F1F?style=for-the-badge&logo=Heroku&logoColor=8E6AC8" />
              <img src="https://img.shields.io/badge/Netlify-1F1F1F?style=for-the-badge&logo=Netlify" />
              <img src="https://img.shields.io/badge/Docker-1F1F1F?style=for-the-badge&logo=Docker" />
              <img src="https://img.shields.io/badge/Postman-1F1F1F?style=for-the-badge&logo=Postman" />
              <img src="https://img.shields.io/badge/Jest-1F1F1F?style=for-the-badge&logo=Jest&logoColor=C21325" />
              <img src="https://img.shields.io/badge/Cucumber-1F1F1F?style=for-the-badge&logo=Cucumber" />
              <img src="https://img.shields.io/badge/Puppeteer-1F1F1F?style=for-the-badge&logo=Puppeteer&logoColor=00B8B8" />
              <img src="https://img.shields.io/badge/Figma-1F1F1F?style=for-the-badge&logo=Figma" />
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Skills;
