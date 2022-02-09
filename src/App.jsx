import React,{useState} from 'react'
import Header from './conponents/Header'
import Menu from './conponents/Menu'
import Main from './conponents/Main'

import './app.css'


const App = () => {

    const [is_menu_open, switch_menu_open] = useState(true);
    const [is_darkmode,switch_darkmode]=useState(false);

    
    return(
        <div className={`base ${is_darkmode ? 'dark-mode':'light-mode'}`}>
            <Header 
                isMenuOpen={is_menu_open} switchMenuOpen={()=>{switch_menu_open(!is_menu_open)}}
                isDarkmode={is_darkmode} switchDarkmode={()=>{switch_darkmode(!is_darkmode)}}
            />
            <div className="body">
                <Menu isMenuOpen={is_menu_open} />
                <Main isDarkmode={is_darkmode} />
            </div>
        </div>
    )
    
}

export default App
