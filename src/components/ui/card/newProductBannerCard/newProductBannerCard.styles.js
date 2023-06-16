import { styled } from "@mui/material";
import Image from "next/image";

const stackSx = () => ({
  backgroundColor: "primary.main",
  borderRadius: "4px",
  position: "relative",
});

export const StyledImage = styled(Image)({
  width: "50%",
  height: "60%",
  position: "absolute",
  left: "0",
});

const newProductBannerCardStyles = {
  stackSx,
};

export default newProductBannerCardStyles;
