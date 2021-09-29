import React from "react";
import "./skills.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import CV from "../../resources/Rosales-Maximilian-Resume.pdf";

function Skills() {
  return (
    <div className="skillsMainContainer">
      <div className="infoSkills">
        <h2>Tech Stack</h2>
        <Card className="SkillsCard">
          <Card.Body>
            <div>
              <h3>Front-End:</h3>
              <p className="frontEnd skills">
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/HTML-1F1F1F?style=for-the-badge&logo=HTML5"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/CSS-1F1F1F?style=for-the-badge&logo=CSS3&logoColor=2965F1"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Sass-1F1F1F?style=for-the-badge&logo=Sass"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/JavaScript-1F1F1F?style=for-the-badge&logo=JavaScript"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/TypeScript-1F1F1F?style=for-the-badge&logo=TypeScript"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/jQuery-1F1F1F?style=for-the-badge&logo=jQuery&logoColor=37A2EA"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Bootstrap-1F1F1F?style=for-the-badge&logo=Bootstrap&logoColor=8E6AC8"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Material-1F1F1F?style=for-the-badge&logo=Material-Design&logoColor=FFFFFF"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/React-1F1F1F?style=for-the-badge&logo=React"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Angular-1F1F1F?style=for-the-badge&logo=Angular&logoColor=DD0031"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Redux-1F1F1F?style=for-the-badge&logo=Redux&logoColor=764ABC"
                />
              </p>
            </div>
            <div>
              <h3>Back-End:</h3>

              <p className="backEnd skills">
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Node.js-1F1F1F?style=for-the-badge&logo=Node.js"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/MongoDB-1F1F1F?style=for-the-badge&logo=MongoDB"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/PostgreSQL-1F1F1F?style=for-the-badge&logo=PostgreSQL&logoColor=007ACC"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/MySQL-1F1F1F?style=for-the-badge&logo=MySQL&logoColor=FF9900"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Firebase-1F1F1F?style=for-the-badge&logo=Firebase"
                />
              </p>
            </div>
            <div>
              <h3>Other Web Dev skills:</h3>

              <p className="othersSkills skills">
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Git-1F1F1F?style=for-the-badge&logo=Git"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/AWS-1F1F1F?style=for-the-badge&logo=Amazon-AWS&logoColor=FF9900"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/GCP-1F1F1F?style=for-the-badge&logo=Google-Cloud"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Vercel-1F1F1F?style=for-the-badge&logo=Vercel"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Heroku-1F1F1F?style=for-the-badge&logo=Heroku&logoColor=8E6AC8"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Netlify-1F1F1F?style=for-the-badge&logo=Netlify"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Docker-1F1F1F?style=for-the-badge&logo=Docker"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Postman-1F1F1F?style=for-the-badge&logo=Postman"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Jest-1F1F1F?style=for-the-badge&logo=Jest&logoColor=C21325"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Cucumber-1F1F1F?style=for-the-badge&logo=Cucumber"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Puppeteer-1F1F1F?style=for-the-badge&logo=Puppeteer&logoColor=00B8B8"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Figma-1F1F1F?style=for-the-badge&logo=Figma"
                />
              </p>
            </div>
            <Button
              variant="outline-dark"
              className="cardsButtons"
              href="/projects"
            >
              See Skillset Applied
            </Button>
          </Card.Body>
        </Card>

        <Card className="SkillsCard">
          <Card.Body>
            <h3>Softskills:</h3>
            <div>
              <h4>Working Skills:</h4>
              <p className="othersSkills skills">
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Agile-1F1F1F?style=for-the-badge&logo=Agile"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Leadership-1F1F1F?style=for-the-badge&logo=Leadership"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Teamwork-1F1F1F?style=for-the-badge&logo=Teamwork"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Communication-1F1F1F?style=for-the-badge&logo=Communication"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Digital_Marketing-1F1F1F?style=for-the-badge&logo=Digital_Marketing"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Adaptability-1F1F1F?style=for-the-badge&logo=Adaptability"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Microsoft_Office-1F1F1F?style=for-the-badge&logo=Microsoft_Office"
                />
              </p>
            </div>
            <div>
              <h4>Languages:</h4>
              <p className="othersSkills skills">
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Spanish-1F1F1F?style=for-the-badge&logo=Spanish"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/English-1F1F1F?style=for-the-badge&logo=English"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/German-1F1F1F?style=for-the-badge&logo=German"
                />
              </p>
            </div>
            <Button variant="outline-dark" className="cardsButtons" href={CV}>
              See CV
            </Button>
          </Card.Body>
        </Card>

        <Card className="SkillsCard">
          <Card.Body>
            <h3>As a person:</h3>
            <div>
              <h4>Hobbies:</h4>
              <p className="othersSkills skills">
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Running-1F1F1F?style=for-the-badge&logo=Running"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Cooking-1F1F1F?style=for-the-badge&logo=Cooking"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Reading-1F1F1F?style=for-the-badge&logo=Reading"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Discover_new_places-1F1F1F?style=for-the-badge&logo=Discover_new_places"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Stock_Trading-1F1F1F?style=for-the-badge&logo=Stock_Trading"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Playing_the_Guitar-1F1F1F?style=for-the-badge&logo=Playing_the_Guitar"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Playing_the_Piano-1F1F1F?style=for-the-badge&logo=Playing_the_Piano"
                />
              </p>
            </div>
            <div>
              <h4>Cultures i have seen:</h4>
              <p className="othersSkills skills">
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Brazil-1F1F1F?style=for-the-badge&logo=Brazil"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Argentina-1F1F1F?style=for-the-badge&logo=Argentina"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Uruguay-1F1F1F?style=for-the-badge&logo=Uruguay"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/UK-1F1F1F?style=for-the-badge&logo=UK"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Holland-1F1F1F?style=for-the-badge&logo=Holland"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Greece-1F1F1F?style=for-the-badge&logo=Greece"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Italy-1F1F1F?style=for-the-badge&logo=Italy"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Croatia-1F1F1F?style=for-the-badge&logo=Croatia"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Turkey-1F1F1F?style=for-the-badge&logo=Turkey"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Bosnia_and_Herzegovina-1F1F1F?style=for-the-badge&logo=Bosnia_and_Herzegovina"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Sweden-1F1F1F?style=for-the-badge&logo=Sweden"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Czech_Republic-1F1F1F?style=for-the-badge&logo=Czech_Republic"
                />
                <img
                  className="badgie"
                  src="https://img.shields.io/badge/Portugal-1F1F1F?style=for-the-badge&logo=Portugal"
                />
              </p>
              {/* 

              <div class="grid-item skills-percentage">
                <h2>
                  <i class="fas fa-code"></i> Front-End
                </h2>
                <div class="list-skills">
                  <div>
                    <div>HTML: 90%</div>
                    <div class="skills-bar">
                      <span class="skills-percentage skills-90"></span>
                    </div>
                  </div>
                  <div>
                    <div>CSS: 85%</div>
                    <div class="skills-bar">
                      <span class="skills-percentage skills-85"></span>
                    </div>
                  </div>
                  <div>
                    <div>Sass: 75%</div>
                    <div class="skills-bar">
                      <span class="skills-percentage skills-75"></span>
                    </div>
                  </div>
                  <div>
                    <div>JavaScript: 65%</div>
                    <div class="skills-bar">
                      <span class="skills-percentage skills-65"></span>
                    </div>
                  </div>
                  <div>
                    <div>TypeScript: 25%</div>
                    <div class="skills-bar">
                      <span class="skills-percentage skills-25"></span>
                    </div>
                  </div>
                  <div>
                    <div>jQuery: 40%</div>
                    <div class="skills-bar">
                      <span class="skills-percentage skills-40"></span>
                    </div>
                  </div>
                  <div>
                    <div>Bootstrap: 85%</div>
                    <div class="skills-bar">
                      <span class="skills-percentage skills-85"></span>
                    </div>
                  </div>
                  <div>
                    <div>Material: 60%</div>
                    <div class="skills-bar">
                      <span class="skills-percentage skills-60"></span>
                    </div>
                  </div>
                  <div>
                    <div>Tailwind CSS: 40%</div>
                    <div class="skills-bar">
                      <span class="skills-percentage skills-40"></span>
                    </div>
                  </div>
                  <div>
                    <div>React: 60%</div>
                    <div class="skills-bar">
                      <span class="skills-percentage skills-60"></span>
                    </div>
                  </div>
                  <div>
                    <div>React Native: 55%</div>
                    <div class="skills-bar">
                      <span class="skills-percentage skills-55"></span>
                    </div>
                  </div>
                  <div>
                    <div>Angular: 40%</div>
                    <div class="skills-bar">
                      <span class="skills-percentage skills-40"></span>
                    </div>
                  </div>
                  <div>
                    <div>Next.js: 30%</div>
                    <div class="skills-bar">
                      <span class="skills-percentage skills-30"></span>
                    </div>
                  </div>
                  <div>
                    <div>GatsbyJS: 30%</div>
                    <div class="skills-bar">
                      <span class="skills-percentage skills-30"></span>
                    </div>
                  </div>
                  <div>
                    <div>PWAs: 40%</div>
                    <div class="skills-bar">
                      <span class="skills-percentage skills-40"></span>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* Brazil, Argentina, Uruguay, Paraguay, Germany, UK, Holland, Greece, Italy, Croatia, Turkey, 
              Bosnia and Herzegovina, Sweden, Czech Republic, Portugal */}
            </div>
            <Button variant="outline-dark" className="cardsButtons" href={CV}>
              See CV
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Skills;
