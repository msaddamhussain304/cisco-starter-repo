import React from "react";
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';


function App() {
  return (
    <div className="App">
     <Banner title = "Sextant"/>
     <Exhibit heading="Data Point 1">
        <p>This is the content for Data Point 1.</p>
      </Exhibit>
      <Exhibit heading="Data Point 2">
        <p>This is the content for Data Point 2.</p>
      </Exhibit>
    </div>
  );
}

export default App;
