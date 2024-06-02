import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Multimodal Web Agent</h1>
      </header>
      <div className="iframe-container">
        <iframe
          src="https://multimodal-web-agent-bay.vercel.app/"
          title="Multimodal Web Agent"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
