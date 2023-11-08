
// import './App.css';


import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";

import {
  BrowserRouter as Router,
  Route,
  Switch

} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "black"

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <div className="container my-3" >
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/">
              <Textform heading="Enter the text" mode={mode} />
            </Route>
          </Switch>

        </div>
      </Router>

    </>
  );
}

export default App;
