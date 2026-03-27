import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import wallpapers from '../data/wallpapers'

function Library() {
  const [purchases, setPurchases] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('purchases')) || []
    setPurchases(saved)
  }, [])

  const purchasedWallpapers = wallpapers.filter((item) => purchases.includes(item.id))

  return (
    <section className="explore-page">
      <div className="explore-header">
        <p className="section-label">PURCHASED LIBRARY</p>
        <h1>Your Unlocked Wallpapers</h1>
        <p className="subtitle center-text">
          Here live the wallpapers you have “officially” acquired. Civilization continues.
        </p>
      </div>

      {purchasedWallpapers.length === 0 ? (
        <div className="empty-state">
          <h3>No purchased wallpapers yet</h3>
          <p>Go to the cart and complete a checkout first.</p>
          <Link to="/explore" className="primary-btn">Browse Wallpapers</Link>
        </div>
      ) : (
        <div className="library-grid">
          {purchasedWallpapers.map((item) => (
            <div className="library-card" key={item.id}>
              <img src={item.image} alt={item.title} className="library-image" />
              <div className="library-content">
                <span>{item.mood}</span>
                <h3>{item.title}</h3>

                <div className="library-actions">
                  <Link to={`/wallpaper/${item.id}`} className="secondary-btn">
                    View
                  </Link>
                  <a
                    href={item.fullImage}
                    download={`${item.id}.jpg`}
                    className="primary-btn"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Library