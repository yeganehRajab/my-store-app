import { Box, Button, Stack } from "@mui/material";
import style from "../../src/components/pages/home/homePage.styles";
import Layout from "../../src/components/ui/layout/index/index";
import ImageCarousel from "../../src/components/ui/slider/imageCarousel/imageCarousel";

const HomePage = () => {
  const nodes = [
    <Box
      className="keen-slider__slide"
      sx={{
        width: "100%",
        backgroundColor: "secondary.light",
        height: "200px",
      }}
      key={0}
    >
      1
    </Box>,
    <Box
      className="keen-slider__slide"
      sx={{ width: "100%", backgroundColor: "secondary.main", height: "200px" }}
      key={1}
    >
      1
    </Box>,
    <Box
      className="keen-slider__slide"
      sx={{ width: "100%", backgroundColor: "primary.main", height: "200px" }}
      key={2}
    >
      1
    </Box>,
  ];

  return (
    <Layout>
      <Stack justifyContent={"center"} alignItems={"center"} spacing={2}>
        <Box
          width={{ lg: "892px", md: "700px", sm: "80%", xs: "90%" }}
          marginTop={{ lg: "80px", md: "70px", sm: "40px", xs: "20px" }}
        >
          <ImageCarousel nodes={nodes} />
        </Box>
      </Stack>
    </Layout>
  );
};

export default HomePage;
