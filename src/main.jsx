import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Homepage from './pages/Homepage.jsx'
import MoviesPage from './pages/MoviesPage.jsx'
import TvPage from './pages/TvPage.jsx'
import NotFound from './pages/NotFound.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Upcoming from './pages/Upcoming.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage   />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="tv" element={<TvPage />} />
        <Route path="upcoming" element={<Upcoming />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
