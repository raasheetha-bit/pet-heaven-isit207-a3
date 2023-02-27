import "./App.css"
import Navbar from "./common/Navbar/Navbar"
import Home from "./components/pages/Home"
import About from "./components/About/About"
import Adopt from "./components/Adopt/Home"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SinglePage from "./SinglePage/SinglePage"



import Release from "./components/Release/Release"
import Contact from "./components/Contact/Contact"
import Footer from "./common/footer/Footer"
import Login from "./components/login/Login"
import Register from "./components/login/Register"



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/adopt' element={<Adopt/>} />
          <Route path='/singlepage/:id' element={<SinglePage/>} />
          <Route path='/release' element={<Release/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/sign-in' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
        </Routes>
        <Footer />
      </Router>
    
    </>
  )
}

export default App