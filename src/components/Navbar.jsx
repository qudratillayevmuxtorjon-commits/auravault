import { Link, NavLink } from 'react-router-dom'

function Navbar() {
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
    </header>
  )
}

export default Navbar