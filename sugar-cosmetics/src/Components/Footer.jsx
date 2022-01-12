import { SocialIcons } from "./SocialIcons/SocialIcons";
import Box from "@mui/material/Box";
import styling from "./Footer.module.css";
import NewsLetter from "./NewsLetter/NewsLetter";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000000", padding: "40px" }}>
      <img
        src="https://in.sugarcosmetics.com/Footer_sugar_icon.png"
        style={{ width: "100px", height: "100px" }}
        alt="sugar"
      />
      <SocialIcons />
      <NewsLetter />
      {/* <div className={styling.common}>Contact</div> */}
    </Box>
  );
};

export { Footer };
