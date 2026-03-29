import { Link, NavLink } from 'react-router-dom'

function Navbar({ user, onOpenLogin, onLogout }) {
  const cart = JSON.parse(localStorage.getItem('cart')) || []

  return (
    <header className="navbar">
      <Link to="/" className="logo">AURAVAULT</Link>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/library">Library</NavLink>
        <NavLink to="/cart" className="cart-link">
          Cart
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <div className="auth-box">
        {user ? (
          <>
            <span className="user-pill">@{user.username}</span>
            <button className="secondary-btn small-btn" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <button className="primary-btn small-btn" onClick={onOpenLogin}>
            Login
          </button>
        )}
      </div>
    </header>
  )
}

export default Navbar