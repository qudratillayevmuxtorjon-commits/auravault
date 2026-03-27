import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import wallpapers from '../data/wallpapers'

function Cart() {
  const navigate = useNavigate()
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

  const cartItems = useMemo(
    () => wallpapers.filter((item) => cart.includes(item.id)),
    [cart]
  )

  const total = useMemo(() => {
    return cartItems
      .reduce((sum, item) => sum + Number(item.price.replace('$', '')), 0)
      .toFixed(2)
  }, [cartItems])

  const removeFromCart = (id) => {
    const updated = cart.filter((itemId) => itemId !== id)
    setCart(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
    window.dispatchEvent(new Event('storage'))
  }

  const handleCheckout = () => {
    if (cart.length === 0) return

    const purchases = JSON.parse(localStorage.getItem('purchases')) || []
    const updatedPurchases = [...new Set([...purchases, ...cart])]

    localStorage.setItem('purchases', JSON.stringify(updatedPurchases))
    localStorage.setItem('cart', JSON.stringify([]))
    setCart([])
    window.dispatchEvent(new Event('storage'))
    navigate('/library')
  }

  return (
    <section className="cart-page">
      <div className="explore-header">
        <p className="section-label">SHOPPING CART</p>
        <h1>Your Selected Wallpapers</h1>
        <p className="subtitle center-text">
          One step closer to spending imaginary money on very real pixels.
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-state">
          <h3>Your cart is empty</h3>
          <p>Add some wallpapers from Explore or detail pages first.</p>
          <Link to="/explore" className="primary-btn">Go to Explore</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-content">
                  <p className="section-label small-label">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <strong>{item.price}</strong>
                </div>

                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p className="section-label">SUMMARY</p>
            <h3>Order Total</h3>
            <div className="summary-row">
              <span>Items</span>
              <strong>{cartItems.length}</strong>
            </div>
            <div className="summary-row">
              <span>Total</span>
              <strong>${total}</strong>
            </div>

            <button className="primary-btn full-btn" onClick={handleCheckout}>
              Complete Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Cart