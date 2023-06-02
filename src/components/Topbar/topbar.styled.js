import styled from "styled-components";

const TopBarStyled = styled.div`
    background-color: #3f271c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: sticky;
    top: 0;
    z-index: 999;

    & .top-bar-logo{
        color: #ffffff;
    }

    & .add-top-cart-btn{
        position: relative;
        z-index: 9;
    }

    & .add-top-cart-btn{
        font-size: 16px;
        color: #ffffff;
        position: relative;
        /* display: block;
        width: 300px;
        height: 60px; */
        width: 300px;
        height: 60px;

        & i{
            font-size: 82px;
            position: absolute;
            top: -16px;
            right: 20px;
        }

        & h1{
            position: absolute;
            right: 22%;
            top: 45%;
            transform: translate(-50%, -50%);
            font-size: 16px;
            margin-bottom: 0px;
        }
    }
`

export default TopBarStyled