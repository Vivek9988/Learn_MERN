import React from 'react';
import './App.css';
import SmallPox from './smallPox';  // Updated import

function App() {

  const data = []

  for (let i = 0; i < 1000; i++) {
    data.push(i + 1)
  }

  const children = data.map(num => {
    const color = num % 2 === 0 ? 'even' : 'odd';
    return <SmallPox key={num} num={num} color={color} />
  });

  return (
    <div className="App">
      {children}
    </div>
  );
}

export default App;