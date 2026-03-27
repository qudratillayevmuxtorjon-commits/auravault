import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import wallpapers from '../data/wallpapers'

function Explore() {
  const [search, setSearch] = useState('')
  const [moodFilter, setMoodFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [sort, setSort] = useState('latest')
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites')) || []
    setFavorites(saved)
  }, [])

  const toggleFavorite = (id) => {
    let updated
    if (favorites.includes(id)) {
      updated = favorites.filter((f) => f !== id)
    } else {
      updated = [...favorites, id]
    }
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  let filtered = wallpapers.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.mood.toLowerCase().includes(search.toLowerCase())

    const matchMood = moodFilter === 'all' || item.mood === moodFilter
    const matchCategory = categoryFilter === 'all' || item.category === categoryFilter

    return matchSearch && matchMood && matchCategory
  })

  if (sort === 'price-low') {
    filtered.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)))
  }

  if (sort === 'price-high') {
    filtered.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)))
  }

  if (sort === 'name') {
    filtered.sort((a, b) => a.title.localeCompare(b.title))
  }

  const moods = ['all', ...new Set(wallpapers.map((w) => w.mood))]
  const categories = ['all', ...new Set(wallpapers.map((w) => w.category))]

  return (
    <section className="explore-page">
      <div className="explore-header">
        <p className="section-label">DISCOVER</p>
        <h1>Explore the Vault</h1>
        <p className="subtitle center-text">
          Premium wallpapers filtered the way your brain actually wants.
        </p>
      </div>

      {/* TOP BAR */}
      <div className="explore-topbar">
        <input
          type="text"
          placeholder="Search wallpapers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <select value={sort} onChange={(e) => setSort(e.target.value)} className="sort-select">
          <option value="latest">Latest</option>
          <option value="price-low">Price Low → High</option>
          <option value="price-high">Price High → Low</option>
          <option value="name">Name</option>
        </select>
      </div>

      <div className="explore-layout">
        {/* SIDEBAR */}
        <div className="explore-sidebar">
          <h4>Filter by Mood</h4>
          <div className="filter-group">
            {moods.map((m) => (
              <button
                key={m}
                className={`filter-btn ${moodFilter === m ? 'active' : ''}`}
                onClick={() => setMoodFilter(m)}
              >
                {m}
              </button>
            ))}
          </div>

          <h4>Category</h4>
          <div className="filter-group">
            {categories.map((c) => (
              <button
                key={c}
                className={`filter-btn ${categoryFilter === c ? 'active' : ''}`}
                onClick={() => setCategoryFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="explore-content">
          <p className="result-count">{filtered.length} results</p>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <h3>No wallpapers found</h3>
              <p>Try different filters or search something else.</p>
            </div>
          ) : (
            <div className="explore-grid">
              {filtered.map((item) => (
                <Link to={`/wallpaper/${item.id}`} className="explore-card protect-image" key={item.id}>
                  <button
                    className="fav-btn"
                    onClick={(e) => {
                      e.preventDefault()
                      toggleFavorite(item.id)
                    }}
                  >
                    {favorites.includes(item.id) ? '❤️' : '🤍'}
                  </button>

                  <img src={item.image} alt={item.title} className="explore-image" draggable="false" />
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
        </div>
      </div>
    </section>
  )
}

export default Explore