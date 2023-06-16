import { Box, Stack, Typography } from "@mui/material";

const Title = ({ titleText }) => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"flex-start"}
    >
      <Box
        width={{ lg: "36px", md: "30px", sm: "22px", xs: "20px" }}
        height={{ lg: "62px", md: "51.6px", sm: "37.8px", xs: "34.4px" }}
        bgcolor={"secondary.dark"}
        borderRadius={"5px"}
        marginLeft={"16px"}
      ></Box>
      <Typography variant="h3Medium" color={"common.black.light"}>
        {titleText}
      </Typography>
    </Stack>
  );
};

export default Title;
