import './App.css';
import Player from './Player';
import audioURL from './Ring.wav'

function App() {
  return (
    <div className="App">
      <Player url={audioURL}/>
    </div>
  );
}

export default App;
