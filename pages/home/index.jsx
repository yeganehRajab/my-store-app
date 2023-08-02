import { Box, Button, Grid, Stack } from "@mui/material";

import style from "../../src/components/pages/home/homePage.styles";

import Layout from "../../src/components/ui/layout/index/index";
import ImageCarousel from "../../src/components/ui/slider/imageCarousel/imageCarousel";
import Title from "../../src/components/ui/title/title";

import { MAIN_PADDING } from "../../src/constant/constant";
import {
  products,
  servicesButtonData,
  sliderNodes,
} from "../../src/components/pages/home/homePage.data";
import ServicesButton from "../../src/components/ui/servicesButton/servicesButton";
import ProductCard from "../../src/components/ui/card/productCard/productCard";
import { BADGE_STATUS } from "../../src/components/pages/home/homePage.constant";
import NewProductBannerCard from "../../src/components/ui/card/newProductBannerCard/newProductBannerCard";

import newP1 from "../../public/images/home/newProduct/1.png";
import newP2 from "../../public/images/home/newProduct/2.png";
import newP3 from "../../public/images/home/newProduct/3.png";
import newP4 from "../../public/images/home/newProduct/4.png";
import FeatureBox from "../../src/components/pages/home/featureBox/featureBox";
import TruckIcon from "../../src/components/ui/icons/truck";
import HeadPhoneIcon from "../../src/components/ui/icons/headPhone";
import GranteeIcon from "../../src/components/ui/icons/grantee";

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
        <Box width={{ lg: "892px", md: "700px", sm: "80%", xs: "100%" }}>
          <ImageCarousel nodes={sliderNodes} />
        </Box>

        <Box width={"100%"}>
          <Title titleText={"دسته بندی کالاها"} />
          <Stack
            spacing={1}
            mt={"20px"}
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
        </Box>

        <Box width={"100%"}>
          <Title titleText={"محصولات ما"} />
          <Grid
            container
            direction={"row"}
            mt={"0px"}
            rowSpacing={4}
            columnSpacing={{ sm: 1 }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {products.map((item, index) => (
              <Grid
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                key={`product_${index}`}
              >
                <ProductCard
                  rate={item.rate}
                  amoutOfRates={item.amoutOfRates}
                  name={item.name}
                  badgeStatus={item.badgeStatus}
                  price={item.price}
                  image={item.image}
                />
              </Grid>
            ))}
          </Grid>

          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            mt={{ lg: "90px", md: "60px", sm: "50px", xs: "40px" }}
          >
            <Button variant="contained" color="secondary" width="150px">
              مشاهده همه محصولات
            </Button>
          </Stack>
        </Box>

        <Box width={"100%"}>
          <Title titleText={" محصولات جدید"} />
          <Grid
            container
            direction={"row"}
            rowSpacing={{ xs: 0.5, sm: 0.5, md: 0, lg: 0 }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingTop={"32px"}
          >
            <Grid
              container
              lg={6}
              md={6}
              sm={12}
              xs={12}
              rowSpacing={0.5}
              columnSpacing={0.5}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <NewProductBannerCard
                  height="200px"
                  width="99%"
                  title="محصول جدید و قشنگ"
                  description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
                  image={newP4}
                  link="#"
                  imageHeight={140}
                  imageWidth={"auto"}
                />
                 
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <NewProductBannerCard
                  title="محصول جدید و قشنگ"
                  description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
                  image={newP3}
                  link="#"
                  imageHeight={150}
                  imageWidth={"auto"}
                  height="200px"
                  width="99%"
                />
                 
              </Grid>

              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <NewProductBannerCard
                  height="200px"
                  width="99%"
                  title="محصول جدید و قشنگ"
                  description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
                  image={newP2}
                  link="#"
                  imageHeight={170}
                  imageWidth={"auto"}
                />
                 
              </Grid>
            </Grid>

            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <NewProductBannerCard
                height="406px"
                width="99%"
                title="محصول جدید و قشنگ"
                description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
                image={newP1}
                link="#"
                imageHeight={300}
                imageWidth={"auto"}
              />
               
            </Grid>
          </Grid>
        </Box>

        <Stack
          width={"80%"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          pt={"50px"}
        >
          <FeatureBox
            icon={<GranteeIcon />}
            title={"ضمانت بازگشت کالا"}
            subTitle={"7 روز ضمانت بازگشت کالا"}
          />
          <FeatureBox
            icon={<TruckIcon />}
            title={"ارسال سریع و رایگان"}
            subTitle={"ارسال رایگان سفارش های بالای 300 هزار تومن"}
          />

          <FeatureBox
            icon={<HeadPhoneIcon />}
            title={"7 روز هفته، 24 ساعته"}
            subTitle={"پشتیبانی شبانه روزی"}
          />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default HomePage;
