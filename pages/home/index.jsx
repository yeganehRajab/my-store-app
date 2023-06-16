import { Box, Button, Grid, Stack } from "@mui/material";

import style from "../../src/components/pages/home/homePage.styles";

import Layout from "../../src/components/ui/layout/index/index";
import ImageCarousel from "../../src/components/ui/slider/imageCarousel/imageCarousel";
import Title from "../../src/components/ui/title/title";

import { MAIN_PADDING } from "../../src/constant/constant";
import {
  servicesButtonData,
  sliderNodes,
} from "../../src/components/pages/home/homePage.data";
import ServicesButton from "../../src/components/ui/servicesButton/servicesButton";

const HomePage = () => {
  return (
    <Layout>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        spacing={9}
        padding={{
          lg: MAIN_PADDING.PADDING_LG,
          md: MAIN_PADDING.PADDING_MD,
          sm: MAIN_PADDING.PADDING_SM,
          xs: MAIN_PADDING.PADDING_XS,
        }}
      >
        <Box width={{ lg: "892px", md: "700px", sm: "80%", xs: "100%" }}>
          <ImageCarousel nodes={sliderNodes} />
        </Box>
        <Title titleText={"دسته بندی کالاها"} />
        <Stack
          spacing={1}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box width={{ lg: "90%" }}>
            <Grid
              container
              direction={"row"}
              rowSpacing={2}
              columnSpacing={{ sm: 1 }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {servicesButtonData.map((item, index) => (
                <Grid
                  item
                  lg={2}
                  md={2}
                  sm={3}
                  xs={6}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  key={index}
                >
                  <ServicesButton text={item.text} icon={item.icon} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>

        <Title titleText={"محصولات ما"} />
      </Stack>
    </Layout>
  );
};

export default HomePage;
