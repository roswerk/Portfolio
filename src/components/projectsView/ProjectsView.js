import React from "react";
import { useState } from "react";
import { Card, CardGroup, Row, Col, Button } from "react-bootstrap";
import "./projectsView.css";
import AngularImg from "../../img/angular.png";
import App from "../../img/app.jpeg";
import Modal from "react-bootstrap/Modal";

function ProjectsView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="backgroundProjects" id="projects">
      <h2 className="projectsTitle">Projects</h2>
      <Row xs={1} md={2}>
        <Col className="projectCol" onClick={handleShow}>
          <Card className="projectsCard">
            <Card.Img
              variant="top"
              src="https://roswerk.github.io/Portfolio-Website/img/backend.jpeg"
              className="cardImg"
            />
            <Card.Body>
              <Card.Title>- REST API - 90's Movies Themed</Card.Title>
              <Card.Text className="projectCardText">
                Server Side REST API for the React and Angular 90's Movies Web
                App. <br />
                <br />
                The project required the creation of a REST API for fetching
                resources from the Database. <br />
                <br />
                It took me 2 weeks to complete the goal of creating a working
                and secure REST API from scratch which could have
                Authenthification, Authorization and Hash encrypyed security.
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
            </div>
          </Card>
        </Col>

        <Col className="projectCol">
          <Card className="projectsCard">
            <Card.Img
              variant="top"
              src="https://roswerk.github.io/Portfolio-Website/img/frontend.png"
              className="cardImg"
            />
            <Card.Body>
              <Card.Title>
                - React + React-Bootstrap - 90's Movies WebApp Searcher
              </Card.Title>
              <Card.Text className="projectCardText">
                Client Side 90's Movies Catalog created with React Js. <br />
                <br />
                The goal was to create an interactive client-side platform in
                order to display the information from the REST-API.
                <br />
                <br />
                It took 1,5 weeks to complete and it required a home page were
                users could see the movie details, a profile and user
                registration segment. <br />
                Thanks to this project i realized the importance of working with
                Front-End frameworks and the power of such technologies if well
                applied.
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

        <Col className="projectCol">
          <Card className="projectsCard">
            <Card.Img variant="top" src={AngularImg} className="cardImg" />
            <Card.Body>
              <Card.Title>
                - Angular + Google Material - 90's Movies WebApp Searcher
              </Card.Title>
              <Card.Text className="projectCardText">
                The goal was similar to the ReactJS catalog. Basically, to
                create an interactive client-side platform in order to display
                the information from the REST-API; Movie information and client
                information.
                <br />
                <br />
                It took 2,5 weeks to complete as it was a new technology and I
                had to understand the fundamental differences between React and
                Angular, but looking back, I can reflect on the importance of
                deepening in Front-End technologies and not stay just with one
                technology stack, as each of them has their pro and cons, and my
                responsibility as a developer is to understand the project
                necessities and propose or adapt to the best-suited technology.
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

        <Col className="projectCol">
          <Card className="projectsCard">
            <Card.Img variant="top" src={App} className="cardAppImg" />
            <Card.Body>
              <Card.Title>
                - React Native + Google Firebase - Real Time Chat App
              </Card.Title>
              <Card.Text className="projectCardText">
                IOS and Android Real-Time-Chat Mobile Application created with
                React-Native and Google Firebase. <br />
                <br />
                The objective was to create a mobile platform which could be
                used as a real-time chat application for both IOS and Android
                without having to develope the whole application on different
                codebases (one for IOS and the other for Android). <br />
                <br />
                The project took 2 weeks to complete. I used a Chat
                UserInterface Kit called "GitedChat" which became real handy in
                order to cut down development costs and time needed.
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

        <Col className="projectCol">
          <Card className="projectsCard">
            <Card.Img
              variant="top"
              src="https://roswerk.github.io/Portfolio-Website/img/pwa.png"
              className="cardImg"
            />
            <Card.Body>
              <Card.Title>- MeetApp - </Card.Title>
              <Card.Text className="projectCardText">
                Serverless Progressive Web Application focused on retrieving
                Events from a Google Calendar Account. <br />
                <br />
                The goal of this project was to create a platform where you
                could log-in with your Gmail account and see the events in your
                city and cities nearby. <br />
                <br />
                The project took 3 weeks to create. It was built using
                Test-Driven-Develoment (TDD), Behaviour-Driven-Development
                (BDD), and End-to-End development approaches. <br />
                <br />I really enjoyed this project as it required to take a
                very important approach before starting to program the platform,
                I can reflect on the importance of using Test-Development
                approaches and the value and time benefit provided by the
                methodologies.
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

        <Col className="projectCol">
          <Card className="projectsCard">
            <Card.Img
              variant="top"
              src="https://roswerk.github.io/Portfolio-Website/img/pokedex.png"
              className="cardImg"
            />
            <Card.Body>
              <Card.Title>- Pokedex - </Card.Title>
              <Card.Text className="projectCardText">
                Pokédex Application using JavaScript, JQuery and the Pokémon
                API. <br />
                <br />
                This was the very first website I created using an external and
                public API.
                <br />
                <br />
                Even though the project is quite basic, it was a fantastic way
                to explore and learn about fetching API and data manipulation.
                <br />
                <br />
                The technologies used were HTML, CSS, JavaScript, JQuery, and
                Bootstrap.
                <br />
                <br />
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
