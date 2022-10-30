import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HealthCheck from "./components/healthcheck";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setname] = React.useState("");

  console.log(process.env);
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/users`, {})
      .then(function (response) {
        setname(response.data);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <div className="App">
          {name &&
            name.map((data) => {
              return (
                <>
                  <p>{data.username}</p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.username}
                  </a>
                </>
              );
            })}
          <Routes>
            <Route exact path="/" element={<HealthCheck />}></Route>
            <Route path="/health" element={<HealthCheck />}></Route>
          </Routes>
        </div>
        
      
      </Router>
    </div>
    
  );
}

export default App;
