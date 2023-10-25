import React from 'react';
import Navbar from '/Users/rajeshkumarreddyavula/Desktop/react/apt/src/components/Navbar/Navbar.jsx'
import './Header.css'

import logo from '/Users/rajeshkumarreddyavula/Desktop/react/apt/src/components/Assets/rentrLogo.svg'
import search from '/Users/rajeshkumarreddyavula/Desktop/react/apt/src/components/Assets/magnifyingGlass.svg'

function Header () {
    return (
        <section className="header">
          <section className="header-top">
            <section className="header-top__logo">
              <a href="/" className="header-logo">
                <img src= {logo} alt=""/>
              </a>
            </section>
            <section className="header-top__navbar">
              <section className="header-top__navigation">
                <div className="SearchBar">
                    <img src={search}alt=""/>
                    <input type="search" placeholder="Search Something" />
                </div>
                <Navbar />
              </section>
              <hr className="header-top__seperator" />
            </section>
          </section>
        </section>
      )
}

export default Header;