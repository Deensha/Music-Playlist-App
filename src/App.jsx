import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home'
import PlayList from './Components/PlayList';
import About from './Components/About';
import  NavBar  from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlbumDetails from './Components/AlbumDetails';

function App() {


  return (
    <>
    <Router>
      <NavBar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/album/:id' element={<AlbumDetails/>}/>
<Route path='/playlist' element={<PlayList/>}/>
<Route path='/about' element={<About/>}/>


</Routes>


    </Router>

    </>
  )
}

export default App
