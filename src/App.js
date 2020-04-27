import React from 'react';
import SketchWrapper from './SketchWrapper'
import backgroundSketch from './sketches/backgroundSketch'
import './App.css';

function App() {
  return (
    <div className="Theme">
      <header className="App-header">
      
        Jane Fessenden
        
      </header>
      <div className="canvas-container">
        <SketchWrapper sketch={backgroundSketch}/>
      </div>

      <div class="flex-container">
        <div>projects</div>
        <div>experiments</div>
        <div>resume</div>
        <div>contact</div>
      </div>

    </div>
  );
}

export default App; 
