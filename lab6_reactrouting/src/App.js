import React from "react"
import Navbars from "./components/navbars";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './components/home'
import About from "./components/about";
import Contact from'./components/contact'
function App(){
  return(
    <div>
    <h1 className="title">React routing by Arvino</h1>

  <BrowserRouter>
  <Navbars />
  <Routes>
    <Route path='/' element ={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>

  </Routes>
  </BrowserRouter>
    </div>
  )
}
export default App;