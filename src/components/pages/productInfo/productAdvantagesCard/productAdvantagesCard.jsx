import { Box, Stack, Typography } from "@mui/material";

const ProductAdvantagesCard = ({ icon, title, subTitle, border }) => {
  return (
    <Stack
      direction={"row"}
      borderBottom={border}
      alignItems={"center"}
      padding={{ lg: "20px", md: "15px", sm: "10px", xs: "10px" }}
    >
      {icon}
      <Stack direction={"column"} spacing={0.5} marginRight={"5px"}>
        <Typography variant="textSmMedium">{title}</Typography>
        <Typography variant="textXsLight">{subTitle}</Typography>
      </Stack>
    </Stack>
  );
};

export default ProductAdvantagesCard;
