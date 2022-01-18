import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Link from '@mui/material/Link';
import PersonIcon from '@mui/icons-material/Person';
import Tooltip from '@mui/material/Tooltip';



const SearchBar = () =>{
    
    return (
        <Box 
        sx={{background:"#F8F9FA", 
            zIndex:"20000",
            position:"fixed",
            // border:"2px solid green", 
            display:"flex",
            height:"45px",
            gap:"7%", 
            width:"98.5%", 
            // marginTop:"5px", 
            color:"#6C757D",
            padding:"20px 15px 18px 15px",
            }}>
            <Link sx={{cursor:"pointer"}}>
                <img src="https://in.sugarcosmetics.com/desc-images/logo-new-year.gif" 
                    style={{marginTop:"5px", 
                            width:"120px", 
                            height:"35px",
                            // border:"1px solid red", 
                            marginLeft:"50px"}} 
                />
            </Link>
            <Box sx={{width:"50%", display:"flex", flexDirection:"row", padding:"2px"}}>
                <input placeholder='Try "Liquid Lipstick"' 
                    style={{width:"92%", 
                            border:"0px solid white", 
                            padding:"8px 12px 8px 22px",
                            height:"25px", 
                            borderWidth:"0px", 
                            background:"#ffffff", 
                            borderRadius:"35px 0px 0px 35px"}} />
                <button style={{background:"#000000", 
                                color:"#FFFFFF",
                                cursor:"pointer",
                                borderWidth:"0px",
                                fontSize:"15x",
                                height:"42px",
                                padding:"8px 0px",
                                borderRadius:"0px 35px 35px 0px",
                                width:"20%"}}>
                Search</button>
            </Box>

            <Box sx={{display:"flex", flexDirection:"row", gap:"2px", padding:"10px 0px 0px 0px"}}>
                <PersonIcon />
                <Link sx={{color:"#000000", 
                        textDecoration:"underline", 
                        cursor:"pointer",
                        fontSize:"15px",
                        padding:"4px 1px"
                        }}>Login/Register
                </Link>
            </Box>
                
            <Box 
                sx={{display:"flex", 
                    flexDirection:"row", 
                    gap:"10px", 
                    padding:"16px 0px 0px 0px", 
                    // border:"2px solid red"
                    }}>
                    <Tooltip sx={{width:"10px"}} title="Wishlist" placement='top-start'>
                        <FavoriteIcon sx={{cursor:"pointer", width:"20px", height:"20px",}} />
                    </Tooltip>
                    <Tooltip title="Cart" placement='top-start'>
                        <LocalMallIcon sx={{cursor:"pointer", width:"20px", height:"20px",}} />
                    </Tooltip>
                    <img src='https://static.thenounproject.com/png/170070-200.png' 
                        style={{
                            width:"20px", 
                            height:"20px", 
                            cursor:"pointer"}} 
                    />
            </Box>
            
        </Box>
    )
}

export {SearchBar}