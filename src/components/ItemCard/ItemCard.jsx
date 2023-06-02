import React, { useContext } from 'react'
import ProductCard from './itemCard.styled'
import IceCartcontaxt from '../../context/CartContext/CartContext'

const ItemCard = ({ productImage, content, price }) => {

    const { manageClick, disabled } = useContext(IceCartcontaxt);

    return (
        <ProductCard className='item-card-wraper'>
            <div className="product-image">
                <img src={productImage} alt="" />
            </div>

            <div className="product-text">
                <h1><span>{price}$</span></h1>
                <p>{content}</p>

                
                <div className="product-btn">
                    <button onClick={manageClick}>Add to cart <i className="fab fa-opencart"></i></button>
                </div>
            </div>
        </ProductCard>
    )
}

export default ItemCard