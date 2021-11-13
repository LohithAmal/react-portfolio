import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Particle from "react-tsparticles"
import Navbar from "./components/Navbar"
import Header from "./components/Header";
function App() {
  return (
    <>
    <Particle
      params={{
        particle:{
          value:30,
          density:{
            enable:true,
            value_area:900
          }
        }
      }}></Particle>
   <Navbar> </Navbar>
   <Header></Header>
   </>
  );
}

export default App;
