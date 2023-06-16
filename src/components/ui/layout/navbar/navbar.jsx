import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import style from "./navbar.styles";

import SearchInput from "../../inputs/search/searchInput";
import CartIcon from "../../icons/cart";
import { useFormik } from "formik";

const Navbar = () => {
  // search bar input
  const initialValues = {
    searchValue: "",
  };

  const onSubmit = (values) => {
    console.log("Submitted:", values);
    //TODO:add api call for search
    // submitting logic
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      formik.handleSubmit();
    }
  };

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

      <SearchInput
        sx={style.searchInputSx()}
        name="searchValue"
        id="searchValue"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        onKeyPress={handleKeyPress}
        error={formik.touched.firstName && Boolean(formik.errors.searchValue)}
      />

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
