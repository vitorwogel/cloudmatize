import './App.css'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom"
import MainPage from './pages/mainPage';
import AdminPage from './pages/adminPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'*'} element={<Navigate to={'/'} />} />
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/admin'} element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App