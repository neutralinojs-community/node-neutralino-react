import './App.css';

import { window, events } from "@neutralinojs/lib"

function App() {
  

  return (
    <div className="App">
      My Neutralinojs App

      <div style={{
        position: "fixed", 
        bottom: "20px", 
        left: "50%", 
        transform: "translateX(-50%)", 
        display: "block" 
      }}>
        <button onClick={() => { events.broadcast("backend:minimize") }} style={{ padding: "5px" }}>
          Minimize from Backend
        </button>
        <button onClick={() => { window.minimize() }} style={{ padding: "5px", margin: "5px" }}>
          Minimize from Frontend
        </button>
      </div>
    </div>
  );
}

export default App;