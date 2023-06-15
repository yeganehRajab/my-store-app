import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import style from "./navbar.styles";

import SearchInput from "../../inputs/search/searchInput";
import { useTheme } from "@mui/material";
import CartIcon from "../../icons/cart";

const Navbar = () => {
  const Theme = useTheme();
  return (
    <Stack
      justifyContent={"space-between"}
      alignItems={"center"}
      direction={"row"}
      bgcolor={"secondary.dark"}
      sx={style.stackSx()}
    >
      <Box>
        {/* TODO: remove inline style after adding logo photo */}
        <Typography
          variant="h3Medium"
          sx={{ fontSize: { lg: "4rem", sm: "3rem", xs: "2rem" } }}
          color="grey.light"
        >
          LOGO
        </Typography>
      </Box>

      <SearchInput place sx={style.searchInputSx()} />

      <Stack alignItems={"center"} direction={"row"}>
        <Button variant="outlined" sx={style.ButtonSx()} color="grey">
          <Typography variant="textXsMedium">ورود | ثبت نام</Typography>
        </Button>

        <IconButton aria-label="delete" color="grey">
          <CartIcon color={"grey"} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
