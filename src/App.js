import "./App.css";
import Navbar from './components/Navbar';
import Main from './components/Main';
import Education from './components/Education/Education';
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Main />
      <TechStack/>
      <Projects />
      <Education />
      <Footer/>
    </>
  );
}

export default App;
