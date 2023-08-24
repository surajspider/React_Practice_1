// import logo from './logo.svg';
import './App.css';
// import ClassCompo from './Compo/ClassCompo';
// import FuncCompo from './Compo/FuncCompo';
import "./Compo/Classstyle.css";
import PropsCompo from './Compo/PropsCompo';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
       */}
      {/* <h1>Hello World!</h1>
      <p>Welcome to EA24 React Session</p> */}
      {/* <h1 id="heading">Styling using Functional and Class Component</h1>
      <FuncCompo />
      <ClassCompo /> */}
      <PropsCompo />

      {/* <FuncCompo />
      <FuncCompoone />
      <FuncCompotwo />
      <FuncCompothree /> */}
    </div>
  );
}

export default App;
