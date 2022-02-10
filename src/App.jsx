import React,{useState} from 'react'
import {Router, Routes,Route} from 'react-router-dom'

import Header from './conponents/Header'
import Menu from './conponents/Menu'
import Acticle from './pages/acticle/index'
import Friend from './pages/friend/index'

import './app.css'


const App = () => {

    const [is_menu_open, switch_menu_open] = useState(false);
    const [is_darkmode,switch_darkmode]=useState(false);

    
    return(
        <div className={`base ${is_darkmode ? 'dark-mode':'light-mode'}`}>
            <Header 
                isMenuOpen={is_menu_open} switchMenuOpen={()=>{switch_menu_open(!is_menu_open)}}
                isDarkmode={is_darkmode} switchDarkmode={()=>{switch_darkmode(!is_darkmode)}}
            />
            <div className="body">
                <Menu isMenuOpen={is_menu_open} />
                <div className='main-box'>
                    <Routes>
                        <Route path='/' element={<Acticle />} />
                        <Route path='/acticle' element={<Acticle />} />
                        <Route path='/friend' element={<Friend />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
    
}

export default App
