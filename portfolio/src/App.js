import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Particle from "react-tsparticles"
import Navbar from "./components/Navbar"
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
function App() {
  return (
    <>
    
   <Navbar> </Navbar>
   <Header></Header>
   <About />
   <Portfolio />
   <Resume />
   <Contacts />
   <Footer />
   </>
  );
}

export default App;
