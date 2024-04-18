import React from 'react';
import SimpleCounterComponent from './Components/PureCounterComponent';
import PureCounterComponent from './Components/SimpleCounterComponent';
function App() {
  return (
    <div>
      <SimpleCounterComponent />
      <PureCounterComponent />
    </div>
  );
}

export default App;