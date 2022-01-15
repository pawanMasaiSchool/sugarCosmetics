import { Box } from "@mui/system"
import { useState } from "react"

const FreeOffer = () =>{
    const [free, setFree] = useState(true);
    const handleClick = () =>{
        setFree(false);
    }
    
    return (
        <>{ free && <Box 
            sx={{ color:"white",
                background:"black",
                height:"auto",
                cursor:"pointer",
                float:"right",
                width:"99%",
                gap:"4%", 
                padding:"9px",
                margin:"auto", 
                position:"absolute",
                display:"flex",
                flexDirection:"row", 
                justifyContent:"center"}}>
                <Box sx={{width:"94%"}}>Get beauty bestsellers + pouch on spend of ₹1399</Box>
                <Box style={{textAlign:"right", 
                            cursor:"pointer",
                            width:"20px"}} 
                            onClick={handleClick}>
                            <p >X</p>
                </Box>
            </Box>}
            </>
    )
}

export {FreeOffer}