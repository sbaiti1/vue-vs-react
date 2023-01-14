import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes , Route  } from 'react-router-dom'
import Counter from './components/counter/counter'
import Todo from './components/todo'
import Home from './components/home'
function App() {
  
  return (
    <div className="App">
        
         <Routes>
         <Route path='/' element={<Home />} ></Route>

            <Route path='/counter' element={<Counter />} ></Route>
            <Route path='/todo' element={<Todo />} ></Route>

         </Routes>
    </div>
  )
}

export default App
