import "./App.css";
import Navbar from './components/Navbar';
import Main from './components/Main';
import Education from './components/Education';
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
function App() {
  return (
    <>
      <Navbar />
      <Main />
      <TechStack/>
      <Projects />
      <Education />

    </>
  );
}

export default App;
