import { Grid, Stack } from "@mui/material";

import Layout from "../../src/components/ui/layout/index/index";

import { MAIN_PADDING } from "../../src/constant/constant";
import TweenSlider from "../../src/components/ui/slider/tweenSlider/tweenSlider";
import { nodes } from "../../src/components/pages/productInfo/productInfo.data";

const HomePage = () => {
  return (
    <Layout>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        spacing={8}
        padding={{
          lg: MAIN_PADDING.PADDING_LG,
          md: MAIN_PADDING.PADDING_MD,
          sm: MAIN_PADDING.PADDING_SM,
          xs: MAIN_PADDING.PADDING_XS,
        }}
      >
        <Grid container>
          <Grid item lg={7}>
            <TweenSlider nodes={nodes} />
          </Grid>
          <Grid item lg={5}></Grid>
        </Grid>
      </Stack>
    </Layout>
  );
};

export default HomePage;
