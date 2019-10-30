import React from "react";
import "./App.css";

function App() {
  let userDepth;
  window.onscroll = e => {
    userDepth = window.scrollY * 0.2;
    document.querySelector(".cube-wrap").style.transform = `rotateX(${userDepth}deg) rotateY(${userDepth}deg)`;
  };
  return (
    <div id="scene">
      <div class="cube-wrap">
        <div class="layer face"></div>
        <div class="layer back">
          <h1 class="test">Hh</h1>
        </div>
        <div class="layer left"></div>
        <div class="layer right"></div>
        <div class="layer top"></div>
        <div class="layer bottom"></div>
      </div>
    </div>
  );
}

export default App;
