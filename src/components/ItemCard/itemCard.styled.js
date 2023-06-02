import styled from "styled-components";

const ProductCard = styled.div`

box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 4px 0px;
border-radius: 20px;
padding: 20px;
display: flex;
align-items: center;
justify-content: space-evenly;

& .product-image{
    width: 200px;
    height: 200px;

    & img{
        width: 100%;
        height: 100%;
    }
}


 & .product-text{

    padding-left: 20px;
    font-family: cursive;

    & p{
        color: #8d8d8d;
        font-size: 16px;
    }

    & h1 {

        font-size: 26px;
        font-weight: 400;
    
        & span{
            color: #8b582e;
            font-size: 26px;
            font-weight: 700;
            margin: 0;
        }
    }

    & .product-btn{
    

    & button{
        background-color: #8b582e;
        border: none;
        cursor: pointer;
        width: 170px;
        height: 45px;
        border-radius: 100px;
        color: #ffffff;
        border-radius: 50px 20px 50px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover{
        border-radius: 20px 50px 20px 50px;
        }

        &:hover i{
            transform: translateX(10px);
        }

        & i{
            margin-left: 8px;
            transition: all 0.3s ease-in-out;
        }
    }
}
 }
`
export default ProductCard