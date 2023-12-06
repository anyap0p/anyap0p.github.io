import { HashRouter, Route, Routes} from "react-router-dom";
import React, { Component } from 'react'
import Welcome from './Pages/Welcome'
import About from './Pages/About'
import Work from "./Pages/Work";
import Art from "./Pages/Art"
import './App.css';

class App extends Component{
  render() {
    return (
      <div className="App">
        <React.Suspense fallback={<div>Loading...</div>}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<Welcome />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/art" element={<Art />} />
            </Routes>
          </HashRouter>
        </React.Suspense>
      </div>
    );
  }
}

export default App;
