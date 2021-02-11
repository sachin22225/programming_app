// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import BlogPage from './components/BlogPage'
function App() {
  return (
    <div >
      <NavBar />
      <BlogPage />
      {/* <div className="App" style={{ border: "solid" }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </div>
  );
}

export default App;
