import { Box } from "@mui/system"
import { FreeOffer } from "./FreeOffer"
import { Navbar } from "./Navbar"
import { SearchBar } from "./SearchBar"

const Header = () => {
    
    return (
        <Box>
            {/* <Box><FreeOffer /></Box><br/><br/> */}
            <Box><SearchBar /></Box><br/><br/><br/><br/>
            <Box><Navbar /></Box><br/><br/><br/>
        </Box>
    )
}

export {Header}