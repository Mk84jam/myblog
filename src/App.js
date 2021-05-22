import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog.js';

function App() {
  return (
    <div className="App">
      <div className="App-main-box">
        <Blog />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
