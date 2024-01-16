import { useState } from 'react'
import React from 'react'
import './App.css'
import UseState1 from "./Components/UseState1"
import UseState2 from "./Components/UseState2"
import UseState3 from "./Components/UseState3"
import UseState4 from "./Components/UseState4"
import UseEffect from "./Components/UseEffect"
import UseContext from './Components/UseContext'
import Task from "./Components/Task"

export const ToggleTheme = React.createContext()  
function App() {
  
  const [state,setState] = useState(true)
  
  const handleToggle = ()=>{
    setState(state=>!state)
  }
  
  return (
    <>
      {/* <ToggleTheme.Provider value={state}>
        <button onClick={handleToggle}>Toggle</button>
        <UseContext />
      </ToggleTheme.Provider> */}

      {/* <UseState /> */}
      {/* <UseState2 /> */}
      {/* <UseState3 /> */}
      {/* <UseState4 /> */}
      {/* <UseEffect /> */}
      <ToggleTheme.Provider value={state}>
        <button onClick={handleToggle} >Toggle </button>
        <Task />
      </ToggleTheme.Provider>
    </>
  )
}

export default App