import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ValueInput />
        <div style={{ padding: "1em" }}>
          <a
            href="https://www.npmjs.com/package/react-number-format"
            style={{ color: "white" }}
          >
            NPM React number format
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
