import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Headers from './components/Headers'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Account from './pages/Account'

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
