import React from 'react'

import './header.css'

const Header= (props) => {
    
    const {isMenuOpen,switchMenuOpen}=props,
          {isDarkmode,switchDarkmode}=props;

    return(
        <div className="header-box">
            <div className="header">
                <button className={`menu-btn ${isMenuOpen ? 'menu-open': ''} `}
                        onClick={switchMenuOpen}
                >
                    <div className="burger-bar burger-bar-top"></div>
                    <div className="burger-bar burger-bar-middle"></div>
                    <div className="burger-bar burger-bar-bottom"></div>
                </button>
                <div className={`logo ${isDarkmode ? 'logo-white':''}`}></div>
                <div className='header-space'></div>
                <div className='header-toolbac'>
                    <button className='change-darkmode-btn circle-btn' onClick={switchDarkmode} >
                        <i className={`fas ${isDarkmode ? 'fa-moon':'fa-sun'} fa-fw`}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;