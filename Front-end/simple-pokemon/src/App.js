import React from 'react';
import './App.scss';

function App({ children }) {
  return (
    <div className="o-pokemon">
      {children}
    </div>
  );
}

export default App;
