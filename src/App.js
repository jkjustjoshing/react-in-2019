import React, { useState } from 'react';
import './App.css';

function App() {
  console.log('Rendering: App')

  const [val1, setVal1] = useState(0)
  const [val2, setVal2] = useState(0)

  return (
    <div className="App">
      <ValueContainer id='1' val={val1} setVal={setVal1} />
      <ValueContainer id='2' val={val2} setVal={setVal2} />
    </div>
  );
}

const ValueContainer = ({ id, val, setVal }) => {
  console.log(`Rendering: ValueContainer id=${id}, val=${val}`)

  return (
    <div>
      Id {id} <button onClick={() => setVal(val+1)}>Increment val 2 - </button> {val}
    </div>
  )
}

export default App;
