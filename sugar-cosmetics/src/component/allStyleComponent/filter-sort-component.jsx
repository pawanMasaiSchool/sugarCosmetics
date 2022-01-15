import { Box } from "@mui/system";
import HomeIcon from '@mui/icons-material/Home';
import { FlexBox, FlexBox2 } from "./productComponet";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export function FilterSort(){
    return <Box sx={{width:"85%", margin:"auto"}}>
        <div>
            <div style={{float:"right"}}>
<FlexBox2 >
    <div>
        <div style={{float:"right"}}>Filter</div>
    <FilterAltIcon fontSize="medium" />
    </div>
</FlexBox2>
</div>

        <FlexBox2 gap="0.7rem" width="initial">
            <HomeIcon fontSize="small" sx={{paddingTop:"0.1rem"}}/> <div> /</div>
            <div>Makeup</div>
        </FlexBox2>
        </div>
    </Box>
}