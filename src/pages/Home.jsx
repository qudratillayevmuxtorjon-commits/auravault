import { Link } from 'react-router-dom'
import wallpapers from '../data/wallpapers'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="tag">PREMIUM ANIME WALLPAPER PLATFORM</p>
          <h1>Enter the World of Cinematic Anime Wallpapers</h1>
          <p className="subtitle">
            A dark premium vault for aesthetic, powerful and original anime-style visuals.
          </p>

          <div className="hero-buttons">
            <Link to="/explore" className="primary-btn">Explore Now</Link>
            <Link to="/favorites" className="secondary-btn">View Favorites</Link>
          </div>

          <div className="hero-stats">
            <div>
              <h3>12K+</h3>
              <p>Wallpaper Drops</p>
            </div>
            <div>
              <h3>4K</h3>
              <p>Ultra HD Ready</p>
            </div>
            <div>
              <h3>300+</h3>
              <p>Curated Vaults</p>
            </div>
          </div>
        </div>

        <div className="hero-preview">
          <div className="preview-card main-preview protect-image">
            <img
              src="/images/preview-1.jpg"
              alt="Featured wallpaper"
              className="preview-image"
              draggable="false"
            />
            <div className="image-shield"></div>
            <div className="preview-overlay"></div>

            <div className="preview-text">
              <span>FEATURED</span>
              <h3>Neon Ronin</h3>
              <p>Cyber night. Rain glow. Silent power.</p>
            </div>
          </div>

          <div className="floating-card small-one">
            <p>New Drop</p>
            <h4>Moonfall Echo</h4>
          </div>

          <div className="floating-card small-two">
            <p>Top Mood</p>
            <h4>Dark Aura</h4>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="trust-item">
          <span>⚡</span>
          <p>Fast digital delivery</p>
        </div>
        <div className="trust-item">
          <span>🖼</span>
          <p>Curated premium visuals</p>
        </div>
        <div className="trust-item">
          <span>🌌</span>
          <p>Dark anime aesthetics</p>
        </div>
        <div className="trust-item">
          <span>💎</span>
          <p>Exclusive style packs</p>
        </div>
      </section>

      <section className="featured">
        <div className="section-top">
          <p className="section-label">FEATURED DROPS</p>
          <h2>Popular Vaults</h2>
        </div>

        <div className="cards">
          {wallpapers.slice(0, 3).map((item) => (
            <Link to={`/wallpaper/${item.id}`} className="card image-card" key={item.id}>
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-overlay"></div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="collections-section">
        <div className="section-top">
          <p className="section-label">COLLECTIONS</p>
          <h2>Browse by Atmosphere</h2>
        </div>

        <div className="collection-grid">
          <div className="collection-box purple-bg">
            <span>01</span>
            <h3>Shadow Vault</h3>
            <p>Dark, divine, mysterious visuals with sharp emotional energy.</p>
          </div>

          <div className="collection-box blue-bg">
            <span>02</span>
            <h3>Cyber Pulse</h3>
            <p>Neon skies, rain reflections and futuristic anime city moods.</p>
          </div>

          <div className="collection-box pink-bg">
            <span>03</span>
            <h3>Blade Echo</h3>
            <p>Warrior stillness, cold steel and dramatic battle atmosphere.</p>
          </div>

          <div className="collection-box dark-bg">
            <span>04</span>
            <h3>Dream Ruins</h3>
            <p>Fantasy structures, moonlight fog and surreal worldbuilding vibes.</p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-top">
          <p className="section-label">HOW IT WORKS</p>
          <h2>Simple. Premium. Clean.</h2>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <div className="process-number">01</div>
            <h3>Explore</h3>
            <p>Browse wallpapers by mood, style, category and atmosphere.</p>
          </div>

          <div className="process-card">
            <div className="process-number">02</div>
            <h3>Select</h3>
            <p>Open the detail page, preview the art and save your favorites.</p>
          </div>

          <div className="process-card">
            <div className="process-number">03</div>
            <h3>Unlock</h3>
            <p>Use the cart flow to unlock and store wallpapers in your library.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box">
          <p className="section-label">START BUILDING YOUR VAULT</p>
          <h2>Unlock wallpapers that actually feel cinematic.</h2>
          <p className="cta-text">
            Premium anime-inspired visuals, darker mood direction, cleaner presentation
            and a stronger brand feel than random wallpaper dumps on the internet.
          </p>

          <div className="hero-buttons cta-buttons">
            <Link to="/explore" className="primary-btn">Enter Explore</Link>
            <Link to="/library" className="secondary-btn">Open Library</Link>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <h3>AURAVAULT</h3>
          <p>
            Cinematic anime wallpaper platform built for premium digital aesthetics.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/library">Library</Link>
          </div>

          <div>
            <h4>Collections</h4>
            <a href="#">Shadow Vault</a>
            <a href="#">Cyber Pulse</a>
            <a href="#">Blade Echo</a>
            <a href="#">Dream Ruins</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home