import { Routes, Route } from 'react-router-dom'
import Home from '../Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* 예: <Route path="/home" element={<Home />} /> 로 바꾸면 URL은 /home */}
    </Routes>
  )
}

export default App
