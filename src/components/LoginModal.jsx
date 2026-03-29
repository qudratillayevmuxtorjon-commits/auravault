import { useState } from 'react'

function LoginModal({ isOpen, onClose, onLogin }) {
  const [username, setUsername] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!username.trim()) return

    const user = {
      username: username.trim(),
    }

    localStorage.setItem('user', JSON.stringify(user))
    onLogin(user)
    onClose()
    setUsername('')
  }

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <p className="section-label">ACCOUNT ACCESS</p>
        <h2>Sign in to AURAVAULT</h2>
        <p className="modal-text">
          Enter a username to continue. Yes, it is fake auth for now. Humanity can survive one more shortcut.
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />

          <div className="modal-actions">
            <button type="submit" className="primary-btn">
              Sign In
            </button>
            <button type="button" className="secondary-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginModal