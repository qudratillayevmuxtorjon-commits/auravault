import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Favorites from './pages/Favorites'
import About from './pages/About'
import WallpaperDetail from './pages/WallpaperDetail'
import Cart from './pages/Cart'
import Library from './pages/Library'
import './App.css'

function App() {
  const [, setRefresh] = useState(false)

  useEffect(() => {
    const preventContextMenu = (e) => {
      e.preventDefault()
    }

    const preventDrag = (e) => {
      const tag = e.target.tagName
      if (tag === 'IMG' || e.target.closest('.protect-image')) {
        e.preventDefault()
      }
    }

    const preventHotkeys = (e) => {
      const key = e.key.toLowerCase()

      if (
        (e.ctrlKey && key === 's') ||
        (e.ctrlKey && key === 'p') ||
        (e.ctrlKey && key === 'u') ||
        (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(key)) ||
        key === 'f12'
      ) {
        e.preventDefault()
      }
    }

    const rerenderForStorage = () => {
      setRefresh((prev) => !prev)
    }

    document.addEventListener('contextmenu', preventContextMenu)
    document.addEventListener('dragstart', preventDrag)
    document.addEventListener('keydown', preventHotkeys)
    window.addEventListener('storage', rerenderForStorage)

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu)
      document.removeEventListener('dragstart', preventDrag)
      document.removeEventListener('keydown', preventHotkeys)
      window.removeEventListener('storage', rerenderForStorage)
    }
  }, [])

  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/library" element={<Library />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/wallpaper/:id" element={<WallpaperDetail />} />
      </Routes>
    </div>
  )
}

export default App