import { Grid, Paper } from "@mui/material"
import { useHistory } from "react-router-dom"
import {ItemContainer} from "../component/allStyleComponent/carouselWrapper"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FilterSort } from "../component/allStyleComponent/filter-sort-component";
const CreateCard=({id,itemName,image,price,routes})=>
{
  const history=useHistory()
 const handleViewProduct=(routes)=>{
    alert('clcick')
   history.push(routes)
 }
  return (<ItemContainer width="90%" imageWidth="70%" imagePading="15px 30%" imageHeight="280px" left="15px" margin="0px" >

                <Paper className="box-item" sx={{cursor:"pointer"}}>
                 <div onClick={()=>handleViewProduct(routes)}>
                  <div>
                    <img src={image} />

                  </div>
                  <div>
                    <div className="product-name" >{itemName}</div>
                    <div className='price'>₹ {price}</div>
                    
                  </div>
                  </div>
                  <div className='cartProduct'>
                      <div className="wishlist">
                      <FavoriteBorderIcon sx={{paddingTop:'0.2rem'}}/>
                      </div>
                      <div className="chooseProduct">
                        Add to cart
                      </div>
                    </div>
                </Paper>
                </ItemContainer>)
}

export default function MakeupPage(){
    const arr=new Array(20).fill(0)
    return <div className="Home">
      <div className='top-heading-filter'>
        <FilterSort />
      </div>
         <Grid container spacing={1} sx={{width:"85%", margin:"1rem auto"}}>

    
    {arr.map((_, i) =><Grid sx={{margin:"1rem 0"}} item lg={3}><CreateCard key={"any"+i} id={i} itemName={"anything"} price={5000} image="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-blush-01-peach-peak-soft-peach-pink-11020203884627.jpg?v=1619102626" routes={"2"}/></Grid>)}

</Grid>
    </div>
}