import React from "react";
import {Card, CardGroup, Row, Col, Button} from "react-bootstrap"
import "./projectsView.css"


function ProjectsView(){

return(
  <div className="backgroundProjects" id="projects">
<h2 className="projectsTitle">Projects</h2>
<Row xs={1} md={2} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src="https://roswerk.github.io/Portfolio-Website/img/backend.jpeg" className="cardImg"/>
        <Card.Body>
          <Card.Title>- REST API - 90's Movies Themed</Card.Title>
          <Card.Text>
          REST API was created with NODEJS and EXPRESS. The Database was created with MONGO DB and Mongoose.
          The API has Authentification, Authorization and Hash encrypyed security.
          </Card.Text>
        </Card.Body>
        <div className="cardButtons">
        <Button href="https://github.com/roswerk/90s-Movie-API-server/tree/main" target="_blank" className="cardsButtons" variant="outline-dark">Source Code</Button>
        {/* <Button target="_blank" className="cardsButtons">Live Demo</Button> */}
        </div>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img variant="top" src="https://roswerk.github.io/Portfolio-Website/img/frontend.png" className="cardImg"/>
        <Card.Body>
          <Card.Title>- React - 90's Movies WebApp Searcher</Card.Title>
          <Card.Text>
          The websites was created using React and React Bootstrap. 
          The data was asynchronomously retrived from the 90's Movies REST-API.
          </Card.Text>
        </Card.Body>
        <div className="cardButtons">
        <Button href="https://github.com/roswerk/90s-Movie-React-client" target="_blank" className="cardsButtons" variant="outline-dark">Source Code</Button>
        <Button href="https://90smovies.netlify.app/" target="_blank" className="cardsButtons" variant="outline-dark">Live Demo</Button>
        </div>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img variant="top" src="https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/230208918_10219115246212109_3834540673980828531_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=qv-6LnUvUJQAX9EX7V4&_nc_ht=scontent-frx5-1.xx&oh=ad244fff6e56cf769178402fc8559310&oe=610F374B" className="cardImg"/>
        <Card.Body>
          <Card.Title>- Angular - 90's Movies WebApp Searcher</Card.Title>
          <Card.Text>
          The websites was created using Angular and Google Material UI Kit.
          The data was asynchronomously retrived from the 90's Movies REST-API.
          </Card.Text>
        </Card.Body>
        <div className="cardButtons">
        <Button href="https://github.com/roswerk/90s-Movie-Angular-client" target="_blank" className="cardsButtons" variant="outline-dark">Source Code</Button>
        <Button href="https://roswerk.github.io/90s-Movie-Angular-client/welcome" target="_blank" className="cardsButtons" variant="outline-dark">Live Demo</Button>
        </div>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img variant="top" src="https://scontent-frt3-2.xx.fbcdn.net/v/t39.30808-6/230325285_10219115297453390_3625314676941644711_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=PMGHjXMFtGkAX8WZHqx&_nc_ht=scontent-frt3-2.xx&oh=ee98c2ec4a0e97cfaa96ef392423a0e7&oe=610F12BC" 
        className="cardAppImg"/>
        <Card.Body>
          <Card.Title>- React Native - Real Time Chat App</Card.Title>
          <Card.Text>
          The Chat App uses Google Firebase as a real-time DB and the GiftedChat Chat UI Kit.
          </Card.Text>
        </Card.Body>
        <div className="cardButtons">
        <Button href="https://github.com/roswerk/Chat-Me" target="_blank" className="cardsButtons" variant="outline-dark">Source Code</Button>
        {/* <Button target="_blank" className="cardsButtons">Live Demo</Button> */}
        </div>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img variant="top" src="https://roswerk.github.io/Portfolio-Website/img/pwa.png" className="cardImg"/>
        <Card.Body>
          <Card.Title>- MeetApp - </Card.Title>
          <Card.Text>
          Data Visualization and TDD, BDD and End-to-End focused project. 
          The project uses Gmail Authenthification for login, and fetches events of a particular host, 
          which gets displayed and the user has the posibility to filter it.
          </Card.Text>
        </Card.Body>
        <div className="cardButtons">
        <Button href="https://github.com/roswerk/MeetApp/tree/master" target="_blank" className="cardsButtons" variant="outline-dark">Source Code</Button>
        <Button href="https://roswerk.github.io/Portfolio-Website/img/pwa.png" target="_blank" className="cardsButtons" variant="outline-dark">Live Demo</Button>
        </div>
      </Card>
    </Col>

  <Col>
      <Card>
        <Card.Img variant="top" src="https://roswerk.github.io/Portfolio-Website/img/pokedex.png" className="cardImg"/>
        <Card.Body>
          <Card.Title>- Pokedex - </Card.Title>
          <Card.Text>
          Basic JS Pokedex Projct, the pokemons were fetched from the Oficial Pokemons REST-API. 
          </Card.Text>
        </Card.Body>
        <div className="cardButtons">
        <Button href="https://github.com/roswerk/Simple-JS-App/tree/1.11" target="_blank" className="cardsButtons" variant="outline-dark" >Source Code</Button>
        <Button href="https://roswerk.github.io/Simple-JS-App/" target="_blank" variant="outline-dark">Live Demo</Button>
        </div>
        
      </Card>
    </Col>



</Row>
  </div>
)


}

export default ProjectsView