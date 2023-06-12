import { Button, Stack } from "@mui/material";
import style from "./navbar.styles";

const Navbar = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} spacing={2} bgcolor={'purple'}>
      <Button variant="outlined" sx={style.ButtonSx()}>
        Contained
      </Button>
    </Stack>
  );
};

export default Navbar;
