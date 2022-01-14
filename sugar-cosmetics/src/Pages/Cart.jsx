import React from 'react'
import CartBox from '../Styled/CartBox';

import Grid from '@mui/material/Grid';
import Stack  from '@mui/material/Stack';
import CartHeading from '../Styled/Cart/CartHeadings'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import CartItem from "../Components/CartItem"
import styles from "../cssModules/Cart.module.css"
import CartBoxDiv from '../Styled/Cart/CartBoxDiv';
import FlexDiv from '../Styled/FlexDiv';
import PaymentsIcon from '@mui/icons-material/Payments';
import { calculateTotal } from '../Utils/utilFunctions';
import CartPriceBreakdown from '../Components/CartPriceBreakdown';
import GiftCard from '../Components/GiftCard';

const Cart = () => {

    const cart = useSelector(state => state.cart.cart)

    const cartTotal = useSelector(state => state.cart.cartTotal)

    return (
        <CartBox>
            {/* Left */}
            <CartBoxDiv>
                <FlexDiv align="center" justify="space-between">
                    <FlexDiv justify="center" align="center"><ShoppingCartOutlinedIcon sx={{color:"#575555"}} /><CartHeading>Order Summary</CartHeading></FlexDiv>
                    <CartHeading>Cart Total: Rs {cartTotal.toFixed(2)}</CartHeading>
                </FlexDiv>
                <FlexDiv direction="column" gap="15px">
                    {cart?.map(el => {
                        return <CartItem props = {el} />
                    } )}
                </FlexDiv>
            </CartBoxDiv>

            {/* Right */}
            <CartBoxDiv>
                    <FlexDiv align="center" gap="6px">
                        <PaymentsIcon style={{color:"#575555", fontSize:"18px"}} />
                        <CartHeading>Offers and Price Details</CartHeading>
                    </FlexDiv>

                    <FlexDiv className={styles.offerAndPriceBox} direction="column">
                        {/* Gift Card Div */}
                        <GiftCard />

                        {/* Price Details Div */}
                        <FlexDiv align="center" gap="6px">
                            <img src="https://sugarcosmetics.com/desc-images/PriceDetails.svg" width="20px" height="20px"/>
                            <p style={{fontSize:"13px"}}><span style={{textDecoration: "underline"}}>Pric</span>e Details</p>
                        </FlexDiv>

                        {/* Price Breakdown */}
                        <CartPriceBreakdown />

                        <FlexDiv style={{marginTop:"22px"}}>
                            <button className={styles.continueShopping}> {"<"} <span style={{textDecoration:"underline", paddingLeft:"0.25rem", paddingRight:"0.25rem"}}>Continue Shopping</span></button>
                            <button className={styles.deliveryInfo}>Delivery Information</button>
                        </FlexDiv>
                    </FlexDiv>

            </CartBoxDiv>
        </CartBox>
    )
}

export default Cart