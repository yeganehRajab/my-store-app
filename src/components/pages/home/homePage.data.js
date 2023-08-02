import { Box } from "@mui/material";
import InstagramIcon from "../../ui/icons/instagram";
import { BADGE_STATUS } from "./homePage.constant";
import Image from "next/image";
import sliderImage1 from "../../../../public/images/home/sliderImage.png";

export const sliderNodes = [
  <Box
    className="keen-slider__slide"
    sx={{
      width: "100%",
    }}
    borderRadius={"4px"}
    key={0}
  >
    <Image
      src={sliderImage1}
      key={"iamge_0"}
      alt="sliderImage"
      height={"100%"}
      width={"100%"}
    />
  </Box>,
  <Box
    className="keen-slider__slide"
    sx={{
      width: "100%",
    }}
    borderRadius={"4px"}
    key={1}
  >
    <Image
      src={sliderImage1}
      key={"iamge_0"}
      alt="sliderImage"
      height={"100%"}
      width={"100%"}
    />
  </Box>,
  <Box
    className="keen-slider__slide"
    sx={{
      width: "100%",
    }}
    borderRadius={"4px"}
    key={2}
  >
    <Image
      src={sliderImage1}
      key={"iamge_0"}
      alt="sliderImage"
      height={"100%"}
      width={"100%"}
    />
  </Box>,
];

export const servicesButtonData = [
  {
    text: "محصول ۱",
    icon: <InstagramIcon color={"secondary"} fontSize={"large"} />,
  },
  {
    text: "محصول ۲",
    icon: <InstagramIcon color={"secondary"} fontSize={"large"} />,
  },
  {
    text: "محصول ۳",
    icon: <InstagramIcon color={"secondary"} fontSize={"large"} />,
  },
  {
    text: "محصول ۴",
    icon: <InstagramIcon color={"secondary"} fontSize={"large"} />,
  },
  {
    text: "محصول ۵",
    icon: <InstagramIcon color={"secondary"} fontSize={"large"} />,
  },
  {
    text: "محصول ۶",
    icon: <InstagramIcon color={"secondary"} fontSize={"large"} />,
  },
];

export const products = [
  {
    rate: 1,
    amoutOfRates: 460,
    name: "محصول زیبا",
    badgeStatus: BADGE_STATUS.NEW,
    price: 49000,
    image:"/images/home/newProduct/1.png"
  },
  {
    rate: 3,
    amoutOfRates: 800,
    name: "محصول زیبا",
    badgeStatus: BADGE_STATUS.NEW,
    price: 419000,
    image:"/images/home/newProduct/2.png"
  },
  {
    rate: 5,
    amoutOfRates: 960,
    name: "محصول زیبا",
    badgeStatus: BADGE_STATUS.UNAVAILABLE,
    price: 479000,
    image:"/images/home/newProduct/3.png"
  },
  {
    rate: 1,
    amoutOfRates: 460,
    name: "محصول زیبا",
    badgeStatus: BADGE_STATUS.NEW,
    price: 49000,
    image:"/images/home/newProduct/5.png"
  },
  {
    rate: 2,
    amoutOfRates: 460,
    name: "محصول زیبا",
    badgeStatus: BADGE_STATUS.UNAVAILABLE,
    price: 60000,
    image:"/images/home/newProduct/6.png"
  },
  {
    rate: 4,
    amoutOfRates: 50,
    name: "محصول زیبا",
    badgeStatus: BADGE_STATUS.NEW,
    price: 469000,
    image:"/images/home/newProduct/7.png"
  },
  {
    rate: 1,
    amoutOfRates: 150,
    name: "محصول زیبا",
    badgeStatus: BADGE_STATUS.NEW,
    price: 1469000,
    image:"/images/home/newProduct/8.png"
  },
  {
    rate: 5,
    amoutOfRates: 50,
    name: "محصول زیبا",
    badgeStatus: BADGE_STATUS.UNAVAILABLE,
    price: 69000,
    image:"/images/home/newProduct/9.png"
  },
];
