import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Task from './components/Task'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
    <Route element={<Home/>} path='/' exact/>
    <Route element={<Task/>} path='/task' exact/>
    
    
    </Routes>
  </>
  )
}

export default App
