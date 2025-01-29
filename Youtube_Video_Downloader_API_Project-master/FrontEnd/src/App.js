import logo from './logo.svg';
import './App.css';
import Download from './Download.jsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Download/>
       <footer className="footer">
          <p>Made with <span role="img" aria-label="heart">❤️</span> using Node, Express, and React</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
