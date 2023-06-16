import { Box, Stack } from "@mui/material";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

const Layout = ({ children }) => {
  return (
    <Stack>
      <Navbar />
      <Box width={"100%"} height={"73vh"}>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
};

export default Layout;
