import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthorizationForm from './pages/AuthorizationForm'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import './App.css'
import Report from './pages/Report'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< AuthorizationForm />} />
        <Route path='home' element={<Home />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='report' element={<Report />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
