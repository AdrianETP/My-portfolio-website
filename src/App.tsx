import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Aboutme from './Pages/Aboutme/Aboutme';
import Code from './Pages/Code/Code';
import Music from './Pages/Music/Music';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/My-portfolio-website/" element={<Aboutme/>}/>
        <Route path="/My-portfolio-website/code" element={<Code/>}/>
        <Route path = "/My-portfolio-website/music" element={<Music/>}/>
      </Routes>
    </Router>
  );
}

export default App;
