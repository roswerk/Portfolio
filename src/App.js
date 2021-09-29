import './App.css';
import NavBar from './components/navbar/Navbar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import ProjectsView from './components/projectsView/ProjectsView';
import ContactMe from './components/contactMe/ContactMe';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <About></About>
      <Skills></Skills>
      <ProjectsView></ProjectsView>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
