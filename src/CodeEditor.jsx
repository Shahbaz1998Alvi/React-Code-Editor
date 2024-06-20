import React, { useState } from 'react';

import { Highlight, Prism } from 'prism-react-renderer';

import './CodeEditor.css'; 

// Defining CodeEditor functional component
const CodeEditor = () => {

  // State in order manage the code input
  const [code, setCode] = useState('');

  // Function to handle changes in the textarea
  const handleChange = (e) => {
    setCode(e.target.value);
  };

  // JSX structure of the component
  return (
    <div className="code-editor">

      {/* Textarea for code input */}
      
      <textarea
        value={code}
        onChange={handleChange}
        className="code-editor-textarea"
        spellCheck="false"
        autoFocus // Automatically focus on textarea
      />
      {/* Preview area for syntax-highlighted code */}
      <div className="code-editor-preview">
        <Highlight Prism={Prism} code={code} language="javascript">
          
          {/* Rendering syntax-highlighted code */}
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
          
              {/* Mapping through each line of tokens */}
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
          
                  {
                  /* Mapping through each token in the line */}
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeEditor;
