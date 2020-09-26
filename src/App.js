import React, { useState } from 'react';
import buttonService from './services/button'

function App() {

  const [lightStatus, setLightStatus] = useState(false)

  //useeffect to get the state of the light from the server

  const handleClick = async () => {
    setLightStatus(!lightStatus)
    const response = await buttonService.toggle(lightStatus)
    console.log("RESPONSE")
    console.log(response)
  }

  return (
    <div>
        Welcome to the Home Automation Frontend<br></br>
        Batman Light: <button onClick={handleClick}>Toggle</button>
    </div>
  )
}

export default App;
