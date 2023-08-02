import {
  Button,
  Grid,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { useState } from "react";

import Layout from "../../src/components/ui/layout/index/index";
import { MAIN_PADDING } from "../../src/constant/constant";
import TweenSlider from "../../src/components/ui/slider/tweenSlider/tweenSlider";
import { nodes } from "../../src/components/pages/productInfo/productInfo.data";
import ProductAdvantagesCard from "../../src/components/pages/productInfo/productAdvantagesCard/productAdvantagesCard";
import DeliveryIcon from "../../src/components/ui/icons/delivary";
import ReturnIcon from "../../src/components/ui/icons/return";
import Counter from "../../src/components/ui/counter/counter";

import styles from "../../src/components/pages/productInfo/productInfo.styles";

const data = {
  productName: "نام محصول",
  rate: "4",
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ",
  amoutOfRates: "3377",
  price: "668000",
};

const HomePage = () => {
  const theme = useTheme();
  const [count, setCount] = useState(1);

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
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <TweenSlider nodes={nodes} />
          </Grid>

          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            xs={12}
            display={"flex"}
            flexDirection={"column"}
            gap={{ lg: 7, md: 4, sm: 3, xs: 2 }}
            padding={{ lg: "0 60px", md: "0 20px 0 0", sm: "30px 0", xs: "20px 0" }}
          >
            <Stack direction={"column"} spacing={1}>
              <Typography variant="h3Medium" color={"common.black.main"}>
                {data.productName}
              </Typography>

              <Stack direction={"row"} gap={0.8} alignItems={"center"}>
                <Rating
                  name="read-only"
                  size="medium"
                  value={data.rate}
                  readOnly
                />
                <Typography variant="label" color={"grey.dark"}>
                  ({data.amoutOfRates} نظر)
                </Typography>
              </Stack>
              <Typography variant="pLgLight" color={"common.black.light"}>
                {data.price} تومان
              </Typography>

              <Typography
                variant="label"
                borderBottom={`1px solid ${theme.palette.common.black.light}`}
                padding={"20px 0"}
              >
                {data.description}
              </Typography>
            </Stack>

            <Stack direction={"row"} width={"100%"}>
              <Counter count={count} setCount={setCount} maxValues={122} />
              <Button
                variant="contained"
                color="secondary"
                sx={styles.buttonSx()}
              >
                افزودن به سبد
              </Button>
            </Stack>

            <Stack
              border={`1px solid ${theme.palette.common.black.light}`}
              borderRadius={"4px"}
            >
              <ProductAdvantagesCard
                border={`1px solid ${theme.palette.common.black.light}`}
                title={"تحویل رایگان"}
                subTitle={
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده "
                }
                icon={<DeliveryIcon fontSize={"large"} />}
              />
              <ProductAdvantagesCard
                title={"ضمانت بازگشت"}
                subTitle={
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده."
                }
                icon={<ReturnIcon fontSize={"large"} />}
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Layout>
  );
};

export default HomePage;
