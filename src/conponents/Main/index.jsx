import React,{useState} from 'react'

import './main.css'

const Main= (props) => {

    const [page_switch_open,Changepage_switch_open]=useState(false)
    const {isDarkmode,switchDarkmode}=props;

    return(
        <div className="main-box">
            <div className='main'>
                
                <div className={`page_tool_bar ${page_switch_open ? 'tool_bar_active':''}`}>
                    <div onClick={()=>{
                        Changepage_switch_open(!page_switch_open)
                    }} className="page_switch">
                        <a className="page_title">首页</a>
                        <button><i className='fas fa-angle-down fa-fw'></i></button>
                    </div>
                    <a className="page_list">首页</a>
                    <a className="page_list">游戏</a>
                    <a className="page_list">编程</a>
                </div>

                <div className="acticle-box">
                    <div className="act">
                        <div className="ac_picture">
                        <img className={` ${isDarkmode ? 'img-dark':''}`} src="/images/Social_Shopping_OG.2e16d0ba.fill-1000x500.png" alt="" />
                        </div>
                        <div className="ac_text">
                        <h3 className="ac_title">
                            <a href="">Is it safe to shop on Instagram? TikTok? Facebook?</a>
                        </h3>
                        <p className="ac_sum">Shopping on social media is easy, but is it safe? Here's what to look out for.</p>
                        <p className="ac_date">2020-10-08</p>
                        </div>
                    </div>
                </div>

                <div className="acticle-box">
                    <div className="act flex_down">
                        <div className="ac_picture">
                        <img className={` ${isDarkmode ? 'img-dark':''}`} src="/images/Social_Shopping_OG.2e16d0ba.fill-1000x500.png" alt="" />
                        </div>
                        <div className="ac_text">
                        <h3 className="ac_title">
                            <a href="">Is it safe to shop on Instagram? TikTok? Facebook?</a>
                        </h3>
                        <p className="ac_sum">Shopping on social media is easy, but is it safe? Here's what to look out for.</p>
                        <p className="ac_date">2020-10-08</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main;