import './App.css';
import React from 'react';
import img from "./img2.jpg"
import ReactPlayer from "react-player"

function App() {
  return (
    
    <React.Fragment>
  <div style={{border:"solid 1px black",maxwidth:"100vw"}}>
  <br/>
  <h1 className="title red">Sahar</h1>
  <br/>
  <img src="/img1.jpg" alt="profile"/>
  <br/>
  <img src={img} alt="profile"/>
  </div>
  <br/>
  <video controls>
    <source src="/LaVieEnRose.mp4" type="video/mp4" />
  </video>
  <br/>
  <ReactPlayer width="820px" height="400px"  controls url="https://www.youtube.com/watch?v=MTsTa7hRrx4" /> 
 
</React.Fragment>
  );
}

export default App;
