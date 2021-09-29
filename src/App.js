import "./App.css";
import NavBar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import ProjectsView from "./components/projectsView/ProjectsView";
import ContactMe from "./components/contactMe/ContactMe";
import Footer from "./components/footer/Footer";

// Bootstrap Navbar imports
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={ProjectsView} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={ContactMe} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
