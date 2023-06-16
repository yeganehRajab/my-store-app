import { Box } from "@mui/material";
import InstagramIcon from "../../ui/icons/instagram";

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
