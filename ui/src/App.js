import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [name, setname] = React.useState("");
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/users`, {})
    .then(function (response) {
      console.log(response);
      setname(response.data[0].name);
    });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{name}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </header>
    </div>
  );
}

export default App;
