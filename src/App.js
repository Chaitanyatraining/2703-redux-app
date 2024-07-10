import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Routing from './Routing/Routing';
import UseMemohook from './Components/UseMemohook';

function App() {
  return (
    <div className="App">
      <Header />
      <UseMemohook />
      {/* <Routing /> */}
    </div>
  );
}

export default App;
