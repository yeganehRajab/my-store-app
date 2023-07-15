import { Box, Typography } from "@mui/material";

import style from "./featureBox.styles";

const FeatureBox = ({ icon, title, subTitle }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        sx={style.mainContainer()}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mb={"15px"}
      >
        <Box
          sx={style.innerContainer()}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box> {icon}</Box>
        </Box>
      </Box>

      <Typography variant="h3Medium" pb={"5px"}>
        {title}
      </Typography>
      <Typography variant="label">{subTitle}</Typography>
    </Box>
  );
};

export default FeatureBox;
