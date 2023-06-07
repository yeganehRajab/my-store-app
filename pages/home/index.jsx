import { Button, Stack } from "@mui/material";
import style from "../../src/components/pages/home/homePage.styles";

const HomePage = () => {
  return(
    <Stack justifyContent={'center'} alignItems={'center'} spacing={2}>
      <Button variant="contained" sx={style.ButtonSx()}>Contained</Button>
      <Button variant="outlined" sx={style.ButtonSx()}>Contained</Button>
      <Button variant="contained" sx={style.ButtonSx()}>Contained</Button>
      <Button variant="contained" sx={style.ButtonSx()}>Contained</Button>
      <Button variant="contained" sx={style.ButtonSx()}>Contained</Button>

    </Stack>
  )
};

export default HomePage;
