import { styled } from "@mui/material";
import Image from "next/image";

const stackSx = () => ({
  backgroundColor: "common.black.main",
  borderRadius: "4px",
  position: "relative",
});

export const StyledImage = styled(Image)({
  // width: "70%",
  // height: "90%",
  position: "absolute",
  left: "0",
});

const newProductBannerCardStyles = {
  stackSx,
};

export default newProductBannerCardStyles;
