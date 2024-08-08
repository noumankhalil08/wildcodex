import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import BlogPage from './Components/BlogPage'
import Home from './pages/Home'
import Navbar2 from './Components/Navbar2'
function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Navbar2/>
    <Routes>
       <Route path="/" element={<Home/>}/> 
       <Route path="/about" element={<About/>}/>
       <Route path="/blog" element={<BlogPage/>}/>
    </Routes>
    </BrowserRouter>
   
      <Footer/>
    </>
  )
}

export default App
