import './App.css';
import Body from './Body.js';
import Header from './Header.js';

/* Main component to run the actual app, embodying both Header.js and Body.js like a container */
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
