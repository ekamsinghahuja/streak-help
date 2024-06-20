import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Demo from './components/Demo'
import Context from "./context/Context"
import Login from './components/Login'




function App() {
  const [showl,setSL] = useState(false);
  

  return (
    <Context>
      
    <main>
    
      <div className='main'>
        <div className='gradient'>
        </div>
      </div>
      {showl? <div className="app">
        
      <Login setSL={setSL} />
      </div>:<>
      <div className="app">
        <Hero setSL={setSL}/>
        <Demo />
      </div>
      
      </>}

      
    </main>
    </Context>
     
  )
}

export default App
