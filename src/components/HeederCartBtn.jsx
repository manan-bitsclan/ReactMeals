import React, { useContext } from 'react'
import TopBarStyled from './Topbar/topbar.styled';
import IceCartcontaxt from '../context/CartContext/CartContext';

const HeederCartBtn = () => {

    const { headerCartNumber, setHeaderCartNumber } = useContext(IceCartcontaxt)

    return (
        <>
            <div className="add-top-cart-btn">
                <i className="fab fa-opencart"></i>
                <h1>{headerCartNumber}</h1>
            </div>
        </>
    )
}

export default HeederCartBtn