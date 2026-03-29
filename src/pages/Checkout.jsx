import { Link, useParams } from 'react-router-dom'
import wallpapers from '../data/wallpapers'

function Checkout() {
  const { id } = useParams()
  const wallpaper = wallpapers.find((item) => item.id === id)

  if (!wallpaper) {
    return (
      <section className="checkout-page">
        <h1>Wallpaper topilmadi</h1>
        <Link to="/explore" className="back-link">← Explore ga qaytish</Link>
      </section>
    )
  }

  const telegramUsername = 'YOUR_USERNAME'

  const message = encodeURIComponent(
    `Salom, men "${wallpaper.title}" wallpaperini sotib olmoqchiman.\n` +
    `ID: ${wallpaper.id}\n` +
    `Narxi: ${wallpaper.price}\n` +
    `Mood: ${wallpaper.mood}\n` +
    `Category: ${wallpaper.category}`
  )

  const telegramLink = `https://t.me/eojmde?text=${message}`

  return (
    <section className="checkout-page">
      <div className="checkout-grid">
        <div className="checkout-image-box protect-image">
          <img
            src={wallpaper.image}
            alt={wallpaper.title}
            className="checkout-image"
            draggable="false"
          />
          <div className="image-shield"></div>
        </div>

        <div className="checkout-content">
          <p className="section-label">CHECKOUT</p>
          <h1>{wallpaper.title}</h1>
          <p className="checkout-description">
            Siz ushbu wallpaper uchun buyurtma bermoqchisiz. Hozircha to‘lov
            Telegram orqali manual tarzda qilinadi. Ha, zamonaviy startupning
            romantik qiyinchiliklari shunaqa bo‘ladi 😌
          </p>

          <div className="checkout-meta">
            <div>
              <span>Narx</span>
              <strong>{wallpaper.price}</strong>
            </div>
            <div>
              <span>Resolution</span>
              <strong>{wallpaper.resolution}</strong>
            </div>
            <div>
              <span>Mood</span>
              <strong>{wallpaper.mood}</strong>
            </div>
            <div>
              <span>Category</span>
              <strong>{wallpaper.category}</strong>
            </div>
          </div>

          <div className="checkout-note">
            <h3>Qanday ishlaydi?</h3>
            <p>1. Pastdagi tugmani bosing.</p>
            <p>2. Telegram ochiladi.</p>
            <p>3. Tayyor xabar yuborasiz.</p>
            <p>4. Sizga to‘lov usuli yuboriladi.</p>
            <p>5. To‘lovdan keyin full wallpaper beriladi.</p>
          </div>

          <div className="detail-buttons">
            <a
              href={telegramLink}
              target="_blank"
              rel="noreferrer"
              className="telegram-btn"
            >
              Continue in Telegram
            </a>

            <Link to={`/wallpaper/${wallpaper.id}`} className="secondary-btn">
              Back to Detail
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout