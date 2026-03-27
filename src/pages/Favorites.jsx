import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import wallpapers from '../data/wallpapers'

function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites')) || []
    setFavorites(saved)
  }, [])

  const favoriteWallpapers = wallpapers.filter((item) => favorites.includes(item.id))

  return (
    <section className="explore-page">
      <div className="explore-header">
        <p className="section-label">YOUR COLLECTION</p>
        <h1>Favorite Wallpapers</h1>
        <p className="subtitle center-text">
          Wallpapers you saved with a little digital heart. Humanity survives another day.
        </p>
      </div>

      {favoriteWallpapers.length === 0 ? (
        <div className="empty-state">
          <h3>No favorites yet</h3>
          <p>Go to Explore and save some wallpapers first.</p>
          <Link to="/explore" className="primary-btn">Go to Explore</Link>
        </div>
      ) : (
        <div className="explore-grid">
          {favoriteWallpapers.map((item) => (
            <Link to={`/wallpaper/${item.id}`} className="explore-card protect-image" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="explore-image"
                draggable="false"
              />
              <div className="image-shield"></div>
              <div className="explore-overlay"></div>
              <div className="explore-info">
                <span>{item.mood}</span>
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}

export default Favorites