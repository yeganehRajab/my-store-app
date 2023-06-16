import { Box, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";
import style from "./productCard.styles";

const ProductCard = ({
  rate = 3,
  amoutOfRates = 35,
  price = 350000,
  name = "محصول شماره۱",
  image = "/images/home/product1.png",
  badgeStatus = 1,
}) => {
  return (
    <Stack width={"270px"}>
      <Stack
        sx={style.imageStackSx()}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"4px"}
        position={"relative"}
      >
        <Box
          position={"absolute"}
          top={"10px"}
          left={"10px"}
          width={"50px"}
          height={"20px"}
          borderRadius={"4px"}
          sx={style.badgeSx({ badgeStatus })}
        >
          <Typography variant="subtitle1" color={"common.white"}>
            {badgeStatus ? "جدید" : "ناموجود"}
          </Typography>
        </Box>
        <Image
          alt="product-image"
          src={image}
          width={146}
          height={163}
          priority
        />
        <Box
          position={"absolute"}
          bottom={"0"}
          className="add"
          borderRadius={"0 0 4px 4px"}
        >
          <Typography variant="textSmMedium">افزودن به سبد خرید</Typography>
        </Box>
      </Stack>
      <Stack spacing={0.5}>
        <Typography
          variant="textSmMedium"
          color={"common.black.main"}
          mt={"16px"}
        >
          {name}
        </Typography>
        <Stack direction={"row"} gap={0.5}>
          <Typography variant="textSmMedium" color={"error"}>
            {price} تومان
          </Typography>
          <Rating name="read-only" size="small" value={rate} readOnly />
          <Typography variant="label" color={"grey.dark"}>
            ({amoutOfRates})
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
