import React from "react";
import { Card, CardGroup, Row, Col, Button } from "react-bootstrap";
import "./projectsView.css";
import AngularImg from "../../img/angular.png";
import App from "../../img/app.jpeg";

function ProjectsView() {
  return (
    <div className="backgroundProjects" id="projects">
      <h2 className="projectsTitle">Projects</h2>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className="projectsCard">
            <Card.Img
              variant="top"
              src="https://roswerk.github.io/Portfolio-Website/img/backend.jpeg"
              className="cardImg"
            />
            <Card.Body>
              <Card.Title>- REST API - 90's Movies Themed</Card.Title>
              <Card.Text>
                REST API was created with NODEJS and EXPRESS. The Database was
                created with MONGO DB and Mongoose. The API has
                Authentification, Authorization and Hash encrypyed security.
              </Card.Text>
            </Card.Body>
            <div className="cardButtons">
              <Button
                href="https://github.com/roswerk/90s-Movie-API-server/tree/main"
                target="_blank"
                className="cardsButtons"
                variant="outline-dark"
              >
                Source Code
              </Button>
              {/* <Button target="_blank" className="cardsButtons">Live Demo</Button> */}
            </div>
          </Card>
        </Col>

        <Col>
          <Card className="projectsCard">
            <Card.Img
              variant="top"
              src="https://roswerk.github.io/Portfolio-Website/img/frontend.png"
              className="cardImg"
            />
            <Card.Body>
              <Card.Title>- React - 90's Movies WebApp Searcher</Card.Title>
              <Card.Text>
                The websites was created using React and React Bootstrap. The
                data was asynchronomously retrived from the 90's Movies
                REST-API.
              </Card.Text>
            </Card.Body>
            <div className="cardButtons">
              <Button
                href="https://github.com/roswerk/90s-Movie-React-client"
                target="_blank"
                className="cardsButtons"
                variant="outline-dark"
              >
                Source Code
              </Button>
              <Button
                href="https://90smovies.netlify.app/"
                target="_blank"
                className="cardsButtons"
                variant="outline-dark"
              >
                Live Demo
              </Button>
            </div>
          </Card>
        </Col>

        <Col>
          <Card className="projectsCard">
            <Card.Img variant="top" src={AngularImg} className="cardImg" />
            <Card.Body>
              <Card.Title>- Angular - 90's Movies WebApp Searcher</Card.Title>
              <Card.Text>
                The websites was created using Angular and Google Material UI
                Kit. The data was asynchronomously retrived from the 90's Movies
                REST-API.
              </Card.Text>
            </Card.Body>
            <div className="cardButtons">
              <Button
                href="https://github.com/roswerk/90s-Movie-Angular-client"
                target="_blank"
                className="cardsButtons"
                variant="outline-dark"
              >
                Source Code
              </Button>
              <Button
                href="https://roswerk.github.io/90s-Movie-Angular-client/welcome"
                target="_blank"
                className="cardsButtons"
                variant="outline-dark"
              >
                Live Demo
              </Button>
            </div>
          </Card>
        </Col>

        <Col>
          <Card className="projectsCard">
            <Card.Img variant="top" src={App} className="cardAppImg" />
            <Card.Body>
              <Card.Title>
                - React Native + Google Firebase - Real Time Chat App
              </Card.Title>
              <Card.Text>
                The Chat App uses Google Firebase as a real-time DB and the
                GiftedChat Chat UI Kit.
              </Card.Text>
            </Card.Body>
            <div className="cardButtons">
              <Button
                href="https://github.com/roswerk/Chat-Me"
                target="_blank"
                className="cardsButtons"
                variant="outline-dark"
              >
                Source Code
              </Button>
              {/* <Button target="_blank" className="cardsButtons">Live Demo</Button> */}
            </div>
          </Card>
        </Col>

        <Col>
          <Card className="projectsCard">
            <Card.Img
              variant="top"
              src="https://roswerk.github.io/Portfolio-Website/img/pwa.png"
              className="cardImg"
            />
            <Card.Body>
              <Card.Title>- MeetApp - </Card.Title>
              <Card.Text>
                Data Visualization and TDD, BDD and End-to-End focused project.
                The project uses Gmail Authenthification for login, and fetches
                events of a particular host, which gets displayed and the user
                has the posibility to filter it.
              </Card.Text>
            </Card.Body>
            <div className="cardButtons">
              <Button
                href="https://github.com/roswerk/MeetApp/tree/master"
                target="_blank"
                className="cardsButtons"
                variant="outline-dark"
              >
                Source Code
              </Button>
              <Button
                href="https://roswerk.github.io/Portfolio-Website/img/pwa.png"
                target="_blank"
                className="cardsButtons"
                variant="outline-dark"
              >
                Live Demo
              </Button>
            </div>
          </Card>
        </Col>

        <Col>
          <Card className="projectsCard">
            <Card.Img
              variant="top"
              src="https://roswerk.github.io/Portfolio-Website/img/pokedex.png"
              className="cardImg"
            />
            <Card.Body>
              <Card.Title>- Pokedex - </Card.Title>
              <Card.Text>
                Basic JS Pokedex Projct, the pokemons were fetched from the
                Oficial Pokemons REST-API.
              </Card.Text>
            </Card.Body>
            <div className="cardButtons">
              <Button
                href="https://github.com/roswerk/Simple-JS-App/tree/1.11"
                target="_blank"
                className="cardsButtons"
                variant="outline-dark"
              >
                Source Code
              </Button>
              <Button
                href="https://roswerk.github.io/Simple-JS-App/"
                target="_blank"
                className="cardsButtons"
                variant="outline-dark"
              >
                Live Demo
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProjectsView;
