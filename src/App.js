import logo from './logo.svg';
import './styling/App.css';
import NavigationBar from './components/NavigationBar'
import MountainScroll from './components/MountainScroll'
import CloudScroll from './components/CloudScroll'
import IdkYetComponent from './components/IdkYetComponent'
import Particles from "react-tsparticles";



function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="particleCont">
        <Particles
          params={{
            fpsLimit: 60,
            fullScreen: false,
            pauseOnOutsideViewport: true,
            particles: {
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0,
                  destroy: "min",
                  speed: 0.2,
                  sync: false
                }
              },
              color: {
                value: "#ffffff"
              },
              move: {
                enable: true,
                gravity: {
                    accerlation: 0.1,
                    enable: true,
                    maxSpeed: 4
                }
              }
            }
          }}
          />
          <CloudScroll />
        <MountainScroll />
      </div>
      <IdkYetComponent />
    </div>
  );
}

export default App;
