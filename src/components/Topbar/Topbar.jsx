import React from 'react'
import TopBarStyled from './topbar.styled'
import HeederCartBtn from './../HeederCartBtn';

const Topbar = () => {
    return (
        <TopBarStyled className='topbar-wraper'>
            <div className="top-bar-logo">
                <h1>ReactIce <i className="far fa-ice-cream"></i></h1>
            </div>

            <HeederCartBtn/>
        </TopBarStyled>
    )
}

export default Topbar