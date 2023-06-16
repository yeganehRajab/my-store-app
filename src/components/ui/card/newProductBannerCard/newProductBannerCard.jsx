import { Box, Stack, Typography } from "@mui/material";
import style, { StyledImage } from "./newProductBannerCard.styles";
import Link from "next/link";
import { useTheme } from "@mui/material";

const NewProductBannerCard = ({
  title,
  description,
  width,
  height,
  image,
  link = "#",
  imageWidth,
  imageHeight,
}) => {
  const theme = useTheme();
  return (
    <Stack
      width={width}
      height={height}
      direction={"column"}
      justifyContent={"flex-end"}
      spacing={1}
      sx={style.stackSx()}
      padding={"15px"}
    >
      {image.length > 0 ? (
        <StyledImage
          src={image}
          alt="newProduct"
          width={imageWidth}
          height={imageHeight}
        />
      ) : (
        ""
      )}
      <Stack width={{ lg: "60%", md: "70%", sm: "90%" }} zIndex={"2"}>
        <Typography variant="textLgRegular" color={"grey.light"}>
          {title}
        </Typography>
        <Typography variant="textXsLight" color={"grey.main"}>
          {description}
        </Typography>
        <Link href={link}>
          <Typography
            variant="textSmMedium"
            color={"common.white"}
            borderBottom={`2px solid ${theme.palette.common.white}`}
          >
            همین الان خرید کنید.
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
};

export default NewProductBannerCard;
