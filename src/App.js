// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Super Devs</h1>
      <Navbar>Dieser Text wird nicht angezeigt</Navbar>
    </div>
  );
}

export default App;
