import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const NewsLetter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid red",
        justifyContent: "left",
        textAlign: "left",
        width: "40%",
        height: "auto",
        padding: "20px",
        color: "#ffffff"
      }}
    >
      <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
      <Box
        sx={{
          // border: "2px solid red",
          display: "flex",
          flexDirection: "row",
          marginTop: "55px"
        }}
      >
        <Input
          sx={{ color: "#999999", borderBottom: "2px solid white" }}
          placeholder="Your email address"
        />
        <Button
          sx={{
            margin: "5px",
            background: "#FC2779",
            color: "#ffffff",
            "&:hover": {
              color: "#ffffff",
              background: "#FC2779"
            }
          }}
        >
          SIGN UP
        </Button>
      </Box>
    </Box>
  );
};

export default NewsLetter;
