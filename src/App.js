import { useState } from 'react';

function App() {
  const [isToggle, setIsToggle] = useState(false);

  function handleClick () {
    setIsToggle(!isToggle)
  }
  
  return (
    <div className="App">
      <button 
        onClick={handleClick} 
        style={{ backgroundColor: isToggle ? 'red' : 'green'}}> 
          { isToggle ? 'OFF' : 'ON' } 
      </button>
    </div>
  );
}

export default App;
