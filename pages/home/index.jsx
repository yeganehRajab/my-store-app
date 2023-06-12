import { Button, Stack } from "@mui/material";
import style from "../../src/components/pages/home/homePage.styles";
import Layout from "../../src/components/ui/layout/index";

const HomePage = () => {
  return (
    <Layout>
      <Stack justifyContent={"center"} alignItems={"center"} spacing={2}>
        <Button variant="contained" sx={style.ButtonSx()}>
          Contained
        </Button>
        <Button variant="outlined" sx={style.ButtonSx()}>
          Contained
        </Button>
        <Button variant="contained" sx={style.ButtonSx()}>
          Contained
        </Button>
        <Button variant="contained" sx={style.ButtonSx()}>
          Contained
        </Button>
        <Button variant="contained" sx={style.ButtonSx()}>
          Contained
        </Button>
      </Stack>
    </Layout>
  );
};

export default HomePage;
