import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
      <img className="header__logo"
        src='http://pngimg.com/uploads/amazon/amazon_PNG21.png'
        alt='AmazonIcon'
      />
      <div className="header__search">
          <input type="text" className="header__searchInput" />
      </div>
      <div className="header__nav">
          
      </div>
    </div>
  )
}

export default Header
