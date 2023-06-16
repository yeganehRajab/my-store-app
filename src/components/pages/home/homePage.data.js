import { Box } from "@mui/material";
import InstagramIcon from "../../ui/icons/instagram";
import { BADGE_STATUS } from "./homePage.constant";

export const sliderNodes = [
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
  },
  {
    rate: 3,
    amoutOfRates: 800,
    name: "محصول زیبا",
    badgeStatus: BADGE_STATUS.NEW,
    price: 419000,
  },
  {
    rate: 5,
    amoutOfRates: 960,
    name: "محصول زیبا",
    badgeStatus: BADGE_STATUS.UNAVAILABLE,
    price: 479000,
  },
  {
    rate: 1,
    amoutOfRates: 460,
    name: "محصول زیبا",
    badgeStatus: BADGE_STATUS.NEW,
    price: 49000,
  },
  {
    rate: 2,
    amoutOfRates: 460,
    name: "محصول زیبا",
    badgeStatus: BADGE_STATUS.UNAVAILABLE,
    price: 60000,
  },
  {
    rate: 4,
    amoutOfRates: 50,
    name: "محصول زیبا",
    badgeStatus: BADGE_STATUS.NEW,
    price: 469000,
  },
  {
    rate: 1,
    amoutOfRates: 150,
    name: "محصول زیبا",
    badgeStatus: BADGE_STATUS.NEW,
    price: 1469000,
  },
  {
    rate: 5,
    amoutOfRates: 50,
    name: "محصول زیبا",
    badgeStatus: BADGE_STATUS.UNAVAILABLE,
    price: 69000,
  },
];
