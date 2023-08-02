const stackSx = () => ({
  height: { lg: "100px", xs: "60px" },
  padding: { lg: "0 60px", sm: "0 20px", xs: "0 5px" },
});

const ButtonSx = () => ({
  width: { sm: "160px", xs: "110px" },
  margin: "0",
  backgroundColor: "common.white",
});

const searchInputSx = () => ({
  width: { lg: "600px", sm: "400px", xs: "150px" },
  height: "32px",
});

const navbarStyles = {
  stackSx,
  ButtonSx,
  searchInputSx,
};

export default navbarStyles;
