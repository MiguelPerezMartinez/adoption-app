import { Routes, Route, Navigate } from 'react-router-dom'

import './styles.css'

import Search from './Pages/Search'
import Authentication from './Pages/Authentication'
import PetDashboard from './Pages/PetDashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pet-dashboard/:id" element={<PetDashboard />} />
        <Route path="*" element={<Navigate to="/search" />} />
      </Routes>
    </>
  )
}

export default App
