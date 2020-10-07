import { Link } from "gatsby"
import React from "react"

const menuToggle = function () {
  document.querySelector(".site-header").classList.toggle("active")
}

const Header = props => (
  <header className="site-header">
    <div className="menu-button" onClick={menuToggle}></div>
    <div className="menu-wrap">
      <h1>
        <Link to="/">{props.siteTitle}</Link>
      </h1>

      <nav>
        <ul>
          <li><Link to="/" onClick={menuToggle}>Home</Link></li>
          <li><Link to="/about" onClick={menuToggle}>About</Link></li>
          <li><Link to="/work" onClick={menuToggle}>Work</Link></li>
          <li><Link to="/blog" onClick={menuToggle}>Blog</Link></li>
          <li><Link to="/contact" onClick={menuToggle}>Contact</Link></li>
        </ul>
      </nav>

    </div>
    <div className="menu-back"></div>
  </header>
)
export default Header
