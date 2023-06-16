import { Box, Stack, Typography, useTheme } from "@mui/material";

import style from "./servicesButton.styles";

import Link from "next/link";

const ServicesButton = ({
  width = "150px",
  height = "127px",
  icon,
  text,
  link = "#",
  textColor = "secondary.dark",
}) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={width}
      height={height}
      spacing={1.2}
      borderRadius={"4px"}
      border={`1px solid ${theme.palette.grey.main}`}
      sx={style.ButtonSx()}
    >
      <Link href={link}>
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={1.2}
        >
          <Box>{icon}</Box>
          <Typography
            variant="pSmRegular"
            color={textColor}
            className="buttonText"
            width={"100%"}
            textAlign={"center"}
          >
            {text}
          </Typography>
        </Stack>
      </Link>
    </Stack>
  );
};

export default ServicesButton;
