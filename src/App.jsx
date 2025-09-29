import React from 'react'
import Header from './Components/Header'
import Add from './Components/Add'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WatchList from './Components/WatchList'
import Watched from './Components/Watched'
const App = () => {
  return (
    // <div>
    // </div>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<WatchList/>} />
        <Route path='/watched' element={<Watched/>} />
        <Route path='/add' element={<Add/>} />
      </Routes>
    </Router>
  )
}

export default App
