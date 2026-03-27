import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import wallpapers from '../data/wallpapers'

function WallpaperDetail() {
  const { id } = useParams()
  const wallpaper = wallpapers.find((item) => item.id === id)

  const [purchased, setPurchased] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  useEffect(() => {
    const savedPurchases = JSON.parse(localStorage.getItem('purchases')) || []
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []

    setPurchased(savedPurchases.includes(id))
    setAddedToCart(savedCart.includes(id))
  }, [id])

  const handleAddToCart = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []

    if (!savedCart.includes(id)) {
      const updated = [...savedCart, id]
      localStorage.setItem('cart', JSON.stringify(updated))
      setAddedToCart(true)
      window.dispatchEvent(new Event('storage'))
    }
  }

  if (!wallpaper) {
    return (
      <section className="detail-page">
        <h1>Wallpaper not found</h1>
        <Link to="/explore" className="back-link">Back to Explore</Link>
      </section>
    )
  }

  return (
    <section className="detail-page">
      <div className="detail-grid">
        <div className={`detail-image-box protect-image ${purchased ? 'unlocked' : 'locked'}`}>
          <img
            src={wallpaper.image}
            alt={wallpaper.title}
            className={`detail-image ${purchased ? 'full-quality' : 'preview-quality'}`}
            draggable="false"
          />
          <div className="image-shield"></div>

          {!purchased && (
            <div className="locked-badge">
              <span>Preview Only</span>
            </div>
          )}
        </div>

        <div className="detail-content">
          <p className="section-label">WALLPAPER DETAIL</p>
          <h1>{wallpaper.title}</h1>
          <p className="detail-description">{wallpaper.description}</p>

          <div className="detail-meta">
            <div>
              <span>Mood</span>
              <strong>{wallpaper.mood}</strong>
            </div>
            <div>
              <span>Category</span>
              <strong>{wallpaper.category}</strong>
            </div>
            <div>
              <span>Resolution</span>
              <strong>{wallpaper.resolution}</strong>
            </div>
            <div>
              <span>Price</span>
              <strong>{wallpaper.price}</strong>
            </div>
          </div>

          <div className="detail-buttons">
            {purchased ? (
              <a
                href={wallpaper.fullImage}
                download={`${wallpaper.id}.jpg`}
                className="primary-btn"
              >
                Download Full Image
              </a>
            ) : (
              <button className="primary-btn" onClick={handleAddToCart}>
                {addedToCart ? 'Added to Cart' : 'Add to Cart'}
              </button>
            )}

            <Link to="/cart" className="secondary-btn">Go to Cart</Link>
          </div>

          <Link to="/explore" className="back-link">← Back to Explore</Link>
        </div>
      </div>
    </section>
  )
}

export default WallpaperDetail