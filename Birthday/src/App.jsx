import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Birthday from './Birthday'
import Data  from './Data.jsx'


function App() {
  
  const [people,setPeople]=useState(Data);
  console.log(people);
  return (
   
    <main>
      <section className='container'>
         <h3>{people.length} Birthdays today</h3>
         <Birthday people={people}/>
         <button onClick={()=>setPeople([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App
