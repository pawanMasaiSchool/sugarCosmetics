import { Grid, Paper } from "@mui/material"
import { useHistory } from "react-router-dom"
import {ItemContainer} from "../component/allStyleComponent/carouselWrapper"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FilterSort } from "../component/allStyleComponent/filter-sort-component";
import "../component/allStyleComponent/home.css"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Cart/actions";
const CreateCard=({id,itemName,image,price,routes,item,handleAddToCart})=>
{
  const history=useHistory()
 const handleViewProduct=(routes)=>{
    
   history.push(routes)
 }
 
  return (<ItemContainer width="90%" imageWidth="70%" imagePading="15px 30%" imageHeight="280px" left="15px" margin="0px" >

                <Paper className="box-item" sx={{cursor:"pointer",height:"400px"}}>
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
                      <div className="chooseProduct" onClick={()=>handleAddToCart(item)}>
                        Add to cart
                      </div>
                    </div>
                </Paper>
                </ItemContainer>)
}

export default function MakeupPage(){

    const dispatch = useDispatch()
    const {isLoading, isError, datas}=useSelector(state=>state.appData)
  const  handleAddToCart=(item)=>{
  dispatch(addToCart(item))
  }  
    
   
    return <div className="Home" style={{backgroundColor:"#f5"}}>
      <div className='top-heading-filter'>
        <FilterSort />
      </div>
         <Grid container spacing={1} sx={{width:"85%", margin:"1rem auto"}}>

    
    {datas.map((item, i) =><Grid sx={{margin:"1rem 0"}} item lg={3}><CreateCard key={item.id} id={item.id} itemName={item.name} price={item.price} image={item.image[0]} routes={item.route}product={item} handleAddToCart={handleAddToCart}/></Grid>)}

</Grid>
    </div>
}