import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={state.theme}>
      <div className="title">
        <span>DH</span> Odonto
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button className="change-theme-button" onClick={toggleTheme}>Change theme</button>
      </div>
    </nav>
  );
};

export default Navbar;