import React,{Component} from 'react'

import './menu.css'

const Menu=(props) => {

    const{isMenuOpen,switchMenuOpen}=props;

    return(
        <>
        <div className={`menu-box-blank ${isMenuOpen ? '':'menu-box-blank-close'}`}></div>
        <div className={`menu-box ${isMenuOpen ? '':'menu-box-close'}`}>
            <div className='menu'>
                <div className='menu-body'>
                    <div className='menu-list'>
                        <span className='menu-list-icon fas fa-book fa-fw'></span>
                        <a className='menu-list-content '>文章</a>
                    </div>
                    <div className='menu-list'>
                        <span className='menu-list-icon fas fa-folder-open fa-fw'></span>
                        <a className='menu-list-content'>文件站</a>
                    </div>
                    <div className='menu-list'>
                        <span className='menu-list-icon fas fa-user-friends fa-fw'></span>
                        <a className='menu-list-content'>友情链接</a>
                    </div>
                    <div className='menu-list'>
                        <span className='menu-list-icon fas fa-toolbox fa-fw'></span>
                        <a className='menu-list-content'>工具集</a>
                    </div>
                    <div className='menu-subheader'>与我联系</div>
                    <div className='menu-list'>
                        <span className='menu-list-icon fas fa-envelope fa-fw'></span>
                        <a className='menu-list-content'>发邮件</a>
                    </div>
                    <div className='menu-list'>
                        <span className='menu-list-icon fab fa-github fa-fw'></span>
                        <a className='menu-list-content'>github</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Menu;