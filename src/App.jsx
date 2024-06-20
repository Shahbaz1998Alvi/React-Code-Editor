import React from 'react';
import './App.css'; 

import CodeEditor from './CodeEditor'; 

// Defining main App functional component
function App() {
  return (
    <div className="App">
      {/* Title for the application */}
      <h1>react-simple-code-editor</h1>
      <p>A simple code editor with syntax highlighting.</p>
      {/* Rendering CodeEditor component */}
      <CodeEditor />
    </div>
  );
}

export default App;
