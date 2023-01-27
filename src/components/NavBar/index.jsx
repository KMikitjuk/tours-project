import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { MENU_ITEMS } from './MenuItems';

function NavBar() {
  const [isClicked, setClick] = useState(false);

  return (
    <nav className="NavbarItems">
      <div className="menu-logo">
        <img
          src="https://bonifique.life/static/img/logo.symbol.white.58ea13a2.png"
          alt="logo"
          height="50"
        />
      </div>
      <h1>
        <Link className="navbar-logo" to="/aboutUs">
          Bonifique
        </Link>
      </h1>

      <div className="menu-icon" onClick={() => setClick(!isClicked)}>
        <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
        {MENU_ITEMS.map((item, index) => {
          return (
            <li key={index}>
              <Link className="nav-links" to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
        <li>
          <Link className="nav-links" to="/favorites">
            Favorites
          </Link>
          {/* <div className="countContainer">{favoriteTodos.count}</div> */}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
