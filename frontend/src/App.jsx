import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import { Signin } from './pages/Signin'
import { Home } from './pages/Home'
import { SignOut } from './pages/SignOut'
import { Profile } from './pages/Profile'
import { About } from './pages/About'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sign-in' element={<Signin />}/>
        <Route path='/sign-out' element={<SignOut />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
