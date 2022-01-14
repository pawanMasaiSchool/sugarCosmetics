import { Grid, Paper } from '@mui/material';
import { Box, maxWidth } from '@mui/system';
import * as React from 'react';
import { useState } from 'react';
import {fetchData} from "../Redux/AppData/api"; 
import Carousel from "react-elastic-carousel";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { TopItemWrapper, Item, ItemContainer, WrapperItem, WrapperItem2, WrapperItem3 } from '../component/allStyleComponent/carouselWrapper';



import "../component/allStyleComponent/home.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const breakPoints = [
  { width: 650, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1000, itemsToShow: 4, itemsToScroll: 3 }
];
const breakPoints2 = [
  { itemsToShow: 3, itemsToScroll: 3 },

];

const CreateCard=({id,itemName,image,price,routes})=>
{
  const history=useHistory()
 const handleViewProduct=(routes)=>{
  //  console.log(id)
   history.push(routes)
 }
  return (<ItemContainer width="90%" imageWidth="70%" imagePading="15px 30%" imageHeight="280px" left="15px" margin="0px" onClick={()=>handleViewProduct(routes)}>

                <Paper className="box-item">
                  <div>
                    <img src={image} />

                  </div>
                  <div>
                    <div className="product-name" >{itemName}</div>
                    <div className='price'>₹ {price}</div>
                    <div className='chooseProduct'>
                      Choose Product
                    </div>
                  </div>
                </Paper></ItemContainer>)
}


const ItemDetails = ({ datas }) => {
  const [index, setIndex] = useState(0)
  const arr = new Array(12).fill(0)
  return (
    <>
      <WrapperItem>
        <div className="carousel-wrapper">
          <Carousel enableAutoPlay={true}>
            <Item>
              <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/c3f8b71f-9644-483d-b750-cd09a1f803c1.jpg" />
            </Item>
            <Item>
              <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/90cd6fb8-82b4-4711-9662-7f54e770866e.jpg" />
            </Item>
          </Carousel>
        </div>
      </WrapperItem>
      <TopItemWrapper fontSize="28px" color="#1f1f1f" fontWeight="300">
        <div>BESTSELLER</div>
        <WrapperItem2>

          <div className="carousel-wrapper">
            <Carousel breakPoints={breakPoints} pagination={false}>


              {datas.map((item, i) => item.category == "face makeup" && item.name.length<40 && <CreateCard key={item.id} id={item.id} itemName={item.name} price={item.price} image={item.image[0]} routes={item.route}/>)}


            </Carousel>
          </div>
        </WrapperItem2>
      </TopItemWrapper>
      <TopItemWrapper fontSize="32px" color="#1f1f1f" fontWeight="300">
        <div>Hot Deals</div>
        <WrapperItem3>

          <div className="carousel-wrapper">
            <Carousel breakPoints={breakPoints2} pagination={false}>


              {arr.map((_, i) => <ItemContainer width="100%" imageWidth="100%" left="0px" imageHeight="100%" imagePadding="0" margin="1rem">

                <div className="box-item">
                  <div>
                    <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/32c61505-8646-48af-9c13-a45e4e62a8d6.jpg" />

                  </div>

                </div></ItemContainer>)}


            </Carousel>
          </div>
        </WrapperItem3>
      </TopItemWrapper>
      <TopItemWrapper fontSize="32px" color="#1f1f1f" fontWeight="300">
        <div>SUGAR STREAMING</div>
        <div style={{ margin: "1.8rem" }}>ULTIMATE LIPSTICK QUIZ</div>
        <Box sx={{ width: 1 }}>
          <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/565df011-723a-477e-b707-cf69edbec249.jpg" style={{ width: "100%" }} />
        </Box>
      </TopItemWrapper>

      <TopItemWrapper fontSize="32px" color="#1f1f1f" fontWeight="300">

        <div style={{ margin: "1.8rem" }}>QUICK BEAUTY TIPS WITH SUGAR</div>
        <WrapperItem>
          <div className="carousel-wrapper">
            <Carousel enableAutoPlay={true}>
              <Item>
                <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3f4e07fa-9834-4652-95e3-8646e738df0e.jpg" />
              </Item>
              <Item>
                <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/c3d410e8-1469-4384-938c-baf1e1309575.jpg" />
              </Item>
            </Carousel>
          </div>
        </WrapperItem>
      </TopItemWrapper>

      <TopItemWrapper fontSize="28px" color="#1f1f1f" fontWeight="300">
        <div>SUPER SAVERS</div>
        <WrapperItem2>

          <div className="carousel-wrapper">
            <Carousel breakPoints={breakPoints} pagination={false}>


              {datas.map((item, i) => item.category == "brush" && item.name.length < 40 && <CreateCard key={item.id} id={item.id} itemName={item.name} price={item.price} image={item.image[0]}/>)}


            </Carousel>
          </div>
        </WrapperItem2>
      </TopItemWrapper>
      <TopItemWrapper fontSize="28px" color="#1f1f1f" fontWeight="300">
        <div>SUGAR STORES </div>
        <Grid container sx={{ width: '90%', margin: "0 auto" }} spacing={4} justifyContent="center">
          <Grid item xl={4}>

            <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/586680fc-192c-415a-8329-c4de72f0d195.jpg" style={{ width: "100%" }} />

          </Grid>
          <Grid item xl={4}>

            <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/586680fc-192c-415a-8329-c4de72f0d195.jpg" style={{ width: "100%" }} />

          </Grid>
          <Grid item xl={4}>

            <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/586680fc-192c-415a-8329-c4de72f0d195.jpg" style={{ width: "100%" }} />

          </Grid>
        </Grid>
      </TopItemWrapper>
      <TopItemWrapper fontSize="28px" color="#1f1f1f" fontWeight="300">
        <div>GIFT SET</div>
        <WrapperItem2>

          <div className="carousel-wrapper">
            <Carousel breakPoints={breakPoints} pagination={false}>


              {datas.map((item, i) => item.category == "lip makeup" && item.name.length < 38 && <CreateCard key={item.id} id={item.id} itemName={item.name} price={item.price} image={item.image[0]}/>)}


            </Carousel>
          </div>
        </WrapperItem2>
      </TopItemWrapper>
      <TopItemWrapper fontSize="28px" color="#1f1f1f" fontWeight="300">
        <div>THIS OR THAT </div>
        <Grid container sx={{ width: '90%', margin: "0 auto" }} spacing={6} justifyContent="center">

          <Grid item xl={6}>

            <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/586680fc-192c-415a-8329-c4de72f0d195.jpg" style={{ width: "100%" }} />

          </Grid>
          <Grid item xl={6}>

            <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/586680fc-192c-415a-8329-c4de72f0d195.jpg" style={{ width: "100%" }} />

          </Grid>
        </Grid>
      </TopItemWrapper>
      <TopItemWrapper fontSize="28px" color="#1f1f1f" fontWeight="300">
        <div>JUST-IN</div>
        <WrapperItem2>

          <div className="carousel-wrapper">
            <Carousel breakPoints={breakPoints} pagination={false}>


              {datas.map((item, i) => i < 20 && item.name.length < 38 && <CreateCard key={item.id} id={item.id} itemName={item.name} price={item.price} image={item.image[0]}/>)}


            </Carousel>
          </div>
        </WrapperItem2>
      </TopItemWrapper>
      <TopItemWrapper fontSize="28px" color="#1f1f1f" fontWeight="300">
        <div>SUGAR BEAUTY BLOG </div>
        <Grid container sx={{ width: '98%', margin: "0 auto" }} spacing={2} justifyContent="center">

          <Grid item xl={4}>

            <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/586680fc-192c-415a-8329-c4de72f0d195.jpg" style={{ width: "100%" }} />

          </Grid>
          <Grid item xl={4}>

            <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/586680fc-192c-415a-8329-c4de72f0d195.jpg" style={{ width: "100%" }} />

          </Grid>
          <Grid item xl={4}>

            <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/586680fc-192c-415a-8329-c4de72f0d195.jpg" style={{ width: "100%" }} />

          </Grid>

        </Grid>
      </TopItemWrapper>


    </>
  );

}



export default function Home() {
  const { isLoading, isError, datas } = useSelector(state => state.appData,shallowEqual)
console.log(isLoading,isError)
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(fetchData())
    

  }, [])
  if (isLoading || isError) {
    return <div className='Home' style={{textAlign:"left"}}>{
      isLoading ? <h3>Loading...</h3> : <h3>something went wrong</h3>
    }</div>
  }
  return <div className='Home'>
    
    <ItemDetails datas={datas} />
  </div>
}
