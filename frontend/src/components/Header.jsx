
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <h1 className="web-name">Web Name</h1>
      <input type="text" placeholder="Search Product" className="search-input" />
      <button className="header-button">Cart</button>
      <button className="header-button">Profile</button>
    </header>

  )
}

export default Header