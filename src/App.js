import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Multimodal Web Agent</h1>
      </header>
      <div className="iframe-container">
        {loading && (
          <div className="loader-container">
            <ClipLoader color="#00BFFF" loading={loading} size={150} />
          </div>
        )}
        <iframe
          src="https://multimodal-web-agent-bay.vercel.app/"
          title="Multimodal Web Agent"
          frameBorder="0"
          allowFullScreen
          onLoad={handleLoad}
          style={{ display: loading ? "none" : "block" }}
        ></iframe>
      </div>
    </div>
  );
}

export default App;
