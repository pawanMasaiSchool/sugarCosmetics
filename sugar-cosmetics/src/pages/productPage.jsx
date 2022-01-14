import { Box, Button, Grid, makeStyles, Paper, Rating } from "@mui/material"
import { ItemContainer, TopItemWrapper, WrapperCarousel } from "../component/allStyleComponent/carouselWrapper";
import { FlexBox, ImageListBox, ItemDetailsWrapper, Wrapper } from "../component/allStyleComponent/productComponet";
import "../component/allStyleComponent/productPage.css";
import Carousel from "react-elastic-carousel";
import { useEffect, useRef, useState } from "react";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from "../component/allStyleComponent/product.module.css"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getDataRequest } from "../Redux/AppData/action";
import { fetchData } from "../Redux/AppData/api";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
const breakPoints = [
    { width: 650, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1000, itemsToShow: 3, itemsToScroll: 3 }
];


// bgColor={nav=="descTab"?"#F5F0F0":"#F9F9F9"} onClick={()=>setNavTab("descTab")}
const MoreAboutProductTab = () => {
    const [navTab,setNavTab]=useState(0)
    

    
    return <>
        <Box sx={{ width: "96%", display: "flex", margin: "auto",cursor:"pointer" }}>
            <TopItemWrapper fontSize="16px" fontWeight="400" color="#0a58ca" bgColor={navTab==0?"#F5F0F0":"#F9F9F9"} onClick={()=>setNavTab(0)} width="25%" paddy="0.45rem" margin="0" borderRadius="10px 0 0 10px">
                <div>Description</div>
            </TopItemWrapper>
            <TopItemWrapper fontSize="16px" fontWeight="400" color="#0a58ca"  width="25%" paddy="0.45rem" margin="0" bgColor={navTab==1?"#F5F0F0":"#F9F9F9"} onClick={()=>setNavTab(1)} >
                <div>How to use</div>
            </TopItemWrapper>

            <TopItemWrapper fontSize="16px" fontWeight="400" color="#0a58ca" width="25%" paddy="0.45rem" margin="0" bgColor={navTab==2?"#F5F0F0":"#F9F9F9"} onClick={()=>setNavTab(2)}>
                <div>Commonly asked questions</div>
            </TopItemWrapper>
            <TopItemWrapper fontSize="16px" fontWeight="400" color="#0a58ca" width="25%" paddy="0.45rem" margin="0" borderRadius="0 10px 10px 0" bgColor={navTab==3?"#F5F0F0":"#F9F9F9"} onClick={()=>setNavTab(3)}>
                <div>Reviews</div>
            </TopItemWrapper>


        </Box>
       {navTab==0&& <Box sx={{ width: "90%", margin: "1rem auto", textAlign: "left" }}>
            <p className={styles.descriptionP}>
                Perfect for eyeshadow application and blending, SUGAR Blend Trend Eyeshadow Brush Round XL 043 softens harsh lines and applies the eyeshadow transition colour with ease. This dome shaped, fluffy eyeshadow brush with 100% cruelty-free bristles picks up powder or cream shadow with ease and rounded brush shape expertly blends and diffuses shadow into the crease. This brush can also be used contouring, shading and highlighting and is perfect for creating a smokey eye look.
            </p>
        </Box>}
        {navTab==1&&<Box sx={{ width: "90%", margin: "1rem auto", textAlign: "left" }}>
            <p className={styles.descriptionP}>
                Use this eyeshadow brush to apply, buff and blend eyeshadow. Sweep back and forth through the crease for a diffused and blended finish.
            </p>
            <p className={styles.descriptionP}>
                <strong> Brush care</strong>: Clean the brush once a week with mild soap, baby shampoo or makeup brush cleanser using lukewarm water. Rinse well and blot the excess water with a towel. Lay the brush flat to dry overnight. Cover it with the mesh and store.
            </p>

        </Box>}
       {navTab==2&& <Box sx={{ width: "90%", margin: "1rem auto", textAlign: "left" }}>
            <p className={styles.descriptionP}>
                <strong>Q. How to clean makeup brushes?</strong><br />
                <strong> A.</strong> Its important to clean your makeup brushes to make sure they are bacteria-free and do not cause any skin irritation.
            </p>
            <p className={styles.descriptionP}>
                <strong>Q. What is the difference between natural vs. synthetic makeup brushes?</strong><br />
                <strong> A.</strong> Natural brush fibers are made from various animal furs and hairs while synthetic makeup brushes are made from man-made hairs of nylon, polyester or other synthetic materials. Natural makeup brushes are usually handcrafted, customized and soft on skin but are not preferred due to ethical reasons. With advanced technology synthetic makeup brushes have come a long way and are a great option to try. They actually mimic the soft, smooth texture and feel of natural makeup bristles and with their smoother fibres are less likely to trap dirt and product, making them easier to clean. These give great results too! You can try the SUGAR Blend Trend Brushes that feature high quality synthetic, 100% cruelty-free bristles that ensure precise makeup application and are perfect for makeup beginners and professionals too!
            </p>
        </Box>}
        {navTab==3&& <Box sx={{ width: "90%", margin: "1rem auto", textAlign: "left" }}>
            <p className={styles.descriptionP}>
               <strong>Coming Soon</strong>
            </p>
        </Box>}
    </>
}
export function ProductDetails() {
    const {url}=useParams()
    console.log(url)
    const imgRef = useRef(null)
    const [wishlist, setWishlist] = useState(true)
    const arr = new Array(20).fill(0)
    const handleImageChange = (src) => {
        imgRef.current.src = src
    }
    const dispatch=useDispatch() 
    const { isLoading, isError, datas } = useSelector(state => state.appData,shallowEqual)
    console.log(datas)
    useEffect(()=>{
        dispatch(fetchData(url))
    },[url])
    return <div className="Home">
        <Wrapper>
            <Paper sx={{ width: "100%" }}>
                <Grid container spacing={0}>
                    <Grid item container xl={6} md={6} sm={6} lg={6} spacing={1}>
                        <Grid item xl={6} md={6} sm={6} lg={6}>
                            <ImageListBox padding="1.5rem">
                                <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-blush-01-peach-peak-soft-peach-pink-12785043210323.jpg?v=1619102648" style={{ width: "100%" }} ref={imgRef} />
                            </ImageListBox>
                        </Grid>
                        <Grid item xl={6} md={6} sm={6} lg={6}>
                            <WrapperCarousel>
                                <div className="carousel-wrapper">
                                    <Carousel verticalMode itemsToShow={3} pagination={false}>


                                        {datas.map((_, i) => <ImageListBox padding="1rem"> <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/Blendtrend-powderedbyimage_ad3b598b-0686-4259-80fe-e5494461c07f.jpg?v=1627660012" width="84px" onMouseEnter={(e) => handleImageChange(e.target.src)} /></ImageListBox>)}


                                    </Carousel>
                                </div>
                            </WrapperCarousel>
                        </Grid>
                    </Grid>
                    <Grid item xl={6} md={6} sm={6} lg={6} justifyContent="left" textAlign="left">

                        <ItemDetailsWrapper>
                            <TopItemWrapper fontSize="23px" fontWeight="400" margin="1rem">
                                <div>
                                    Blend Trend Face Brush - 007 Powder
                                </div>
                            </TopItemWrapper>
                            <Box
                                sx={{
                                    display: 'flex',

                                }}
                            >
                                <Rating

                                    value={3.5}
                                    precision={0.5}
                                    readOnly />

                                <Box sx={{ ml: 2 }}></Box>
                                5.0 (5)
                            </Box>
                            <TopItemWrapper fontSize="18px" color="#6c757d" fontWeight="400" margin="0.6rem"><div>₹ 400</div></TopItemWrapper>
                            <Box sx={{ marginTop: "0.8rem" }}>
                                <Button startIcon={<LocalMallIcon />} variant="contained" sx={{ backgroundColor: "#1C1F23", width: "50%", fontSize: "16px", fontWeight: "400", fontStyle: "normal" }}>Add to cart</Button>
                            </Box>
                            <Box sx={{ display: "flex", gap: "0.8rem", marginTop: "1.4rem", cursor: "pointer" }} onClick={() => setWishlist(!wishlist)}>
                                {wishlist ? <FavoriteBorderIcon sx={{ fontSize: "14px", marginTop: "0.3rem" }} /> : <FavoriteIcon sx={{ fontSize: "14px", marginTop: "0.3rem" }} />}

                                <div style={{ fontSize: "14px", textDecoration: "underline", color: "#212529", fontWeight: "400" }}>{wishlist ? "Save to Wishlist" : "Remove from Wishlist"}</div>

                            </Box>
                        </ItemDetailsWrapper>
                    </Grid>
                </Grid>
                <div style={{ textAlign: "left", width: "96%", margin: "2rem auto", }}>
                    <img src="https://in.sugarcosmetics.com/productbanner.svg" style={{width:"auto"}}/>
                </div>
                <MoreAboutProductTab key='prodct-desc-tab' />
            </Paper>
        </Wrapper>
    </div>
}


// fontSize};
//     color:${props => props.color};
//     font-weight:${props => props.fontWeight