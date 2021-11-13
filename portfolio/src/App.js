import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Particle from "react-tsparticles"
import Navbar from "./components/Navbar"
import Header from "./components/Header";
import About from "./components/About";
function App() {
  return (
    <>
    
   <Navbar> </Navbar>
   <Header></Header>
   <About />
   </>
  );
}

export default App;
