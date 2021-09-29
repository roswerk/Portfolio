import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { LinkContainer } from "react-router-bootstrap";

import "./navbar.css";

// Import of components
import About from "../about/About";
import Home from "../home/Home";
import Skills from "../skills/Skills";
import ProjectsView from "../projectsView/ProjectsView";
import ContactMe from "../contactMe/ContactMe";
import Footer from "../footer/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        id="customNav"
        fixed="top"
      >
        <LinkContainer to="/">
          <Navbar.Brand href="#home">Maximilian Rosales</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/skills">
              <Nav.Link>Skills</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Switch> */}
      {/* <Route path="/">
          <HomeNav />
        </Route> */}
      {/* 
        <Route path="/about">
          <AboutMeNav />
        </Route>

        <Route path="/skills">
          <SkillsNav />
        </Route>

        <Route path="/projects">
          <ProjectsNav />
        </Route>

        <Route path="/contactMe">
          <ContactMeNav />
        </Route>
      </Switch> */}
    </div>
  );
}

export default NavBar;

// // function HomeNav() {
// //   return <Home />;
// // }

// function AboutMeNav() {
//   return <About />;
// }

// function SkillsNav() {
//   return <Skills />;
// }

// function ProjectsNav() {
//   return <ProjectsView />;
// }
// function ContactMeNav() {
//   return <ContactMe />;
// }
