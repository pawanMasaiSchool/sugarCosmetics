import React from 'react'
import FlexDiv from '../Styled/FlexDiv'
import styles from "../cssModules/Cart.module.css"
import { useSelector } from 'react-redux'


const UserAddressBox = () => {
    const cartTotal = useSelector(state => state.cart.cartTotal)
    const discount = useSelector(state => state.cart.discount)
    return (
        <FlexDiv style={{padding:"6px 1rem", marginTop:'6px'}} className={styles.offerAndPriceBox} direction="column">
            <FlexDiv justify="space-between" style={{margin:"0"}}>
                <FlexDiv  style={{margin:"0"}}  align="center">
                    <p className={styles.textMuted}>Full name</p>
                    <p className={`${styles.textBold} ${styles.pxTwo}`}>Gurbir Singh</p>
                </FlexDiv>
                <FlexDiv style={{margin:"0"}}>
                    <p className={styles.textMuted}>Phone number</p>
                    <p className={`${styles.textBold} ${styles.pxTwo}`}>6280263283</p>
                </FlexDiv>
            </FlexDiv>
            <FlexDiv>
                <FlexDiv align="center">
                    <p style={{margin:"0", marginBottom:"2px"}} className={styles.textMuted}>Email</p>
                    <p style={{margin:"0", marginBottom:"2px"}} className={`${styles.textBold} ${styles.pxTwo}`}>madness.n0thing@gmail.com</p>
                </FlexDiv>
            </FlexDiv>
            <FlexDiv justify="space-between">
                    <p className={styles.textMuted}>Delivery Address</p>
                    <button className={styles.addAddressBtn}>+ Add New Address</button>
            </FlexDiv>
            <div style={{backgroundColor:"#fff", fontWeight: "500", fontSize: "14px", padding:"1rem", marginBottom:"24px"}}>
                <p style={{margin:"0", marginBottom:"2px"}}>Gurbir Singh</p>
                <p style={{margin:"0", marginBottom:"2px"}}>6280263283</p>
                <p style={{margin:"0", marginBottom:"2px"}}>House Number 807, Sector 38A</p>
                <p style={{margin:"0", marginBottom:"2px"}}>Chandigarh, Punjab, 160036, India.</p>
            </div>
            <FlexDiv style={{marginBottom:"24px"}}>
                <button className={styles.continueShopping}> {"<"} <span style={{textDecoration:"underline", paddingLeft:"0.25rem", paddingRight:"0.25rem"}}>Offers and Pricing</span></button>
                <button className={styles.deliveryInfo}>Proceed to Payment ( Rs {(cartTotal + 49.00 - ((discount/100) * cartTotal)).toFixed(2)} ) </button>
            </FlexDiv>
        </FlexDiv>
    )
}

export default UserAddressBox
