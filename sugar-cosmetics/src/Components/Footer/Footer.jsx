import { SocialIcons } from "./SocialIcons/SocialIcons";
import Box from "@mui/material/Box";
import styling from "./Footer.module.css";
import NewsLetter from "./NewsLetter/NewsLetter";
import { Information } from "./Information/Information";
import { GetInTouch } from "./GetInTouch/GetInTouch";
import { GetNewApp } from "./GetNewApp/GetNewApp";

const Footer = () => {
  return (
    <>
    
    
    <Box sx={{ backgroundColor: "#000000", padding: "50px", color:"#ffffff", width:"90%", margin:"auto" }}>
      <img
        src="https://in.sugarcosmetics.com/Footer_sugar_icon.png"
        style={{ width: "100px", height: "100px" }}
        alt="sugar"
      />
      <SocialIcons />
      <Box sx={{display:"flex",flexDirection:"row", gap:"15%"}}>
      <NewsLetter />
      <GetNewApp />
      </Box>
      <Information />
      <GetInTouch /><br/>
      <hr/><br/>
      <p>Copyright © 2022 SUGAR Cosmetics. All rights reserved.</p>
    </Box>
    <div>hi</div>
    </>
  );
};

export { Footer };
