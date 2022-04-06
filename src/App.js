import logo from './logo.svg';
import './styling/App.css';
import NavigationBar from './components/NavigationBar'
import IntroSlide from './components/IntroSlide'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <IntroSlide />
    </div>
  );
}

export default App;
