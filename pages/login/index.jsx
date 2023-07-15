import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

import Layout from "../../src/components/ui/layout/index/index";

import Image from "next/image";
import Link from "next/link";
import x from "../../public/images/login/bag.png";
import { useFormik } from "formik";

const loginInitialValues = {
  mobileNumber: "",
  password: "",
};

const LoginPage = () => {
  //
  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: loginInitialValues,
    onSubmit: handleSubmit,
  });

  return (
    <Layout>
      <Grid container mb={10}>
        <Grid item xs={6}>
          <Stack
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ px: "110px", pt: "140px" }}
            spacing="80px"
          >
            <Typography
              textAlign="center"
              sx={{ fontSize: "30px", fontWeight: "600" }}
            >
              ورود
            </Typography>

            <Stack spacing="80px">
              <TextField
                label="تلفن همراه"
                variant="standard"
                sx={{
                  label: {
                    fontWeight: "500",
                    fontSize: "18px",
                  },
                }}
                {...formik.getFieldProps("mobileNumber")}
              />
              <TextField
                label="رمز عبور"
                variant="standard"
                sx={{
                  label: {
                    fontWeight: "500",
                    fontSize: "18px",
                  },
                }}
                {...formik.getFieldProps("password")}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ bgcolor: "secondary.light" }}
              >
                ورود
              </Button>
            </Stack>

            <Stack spacing="20px">
              <Typography>
                رمز عبور یا حساب کاربری خود را فراموش نمودید؟
                <br />
                <Typography
                  component={Link}
                  sx={{
                    color: "black",
                    textDecoration: "underline",
                  }}
                  href="/"
                >
                  بازگردانی رمز عبور
                </Typography>
              </Typography>
              <Typography>
                چنانچه هنوز ثبت نام نکرده اید،
                <Typography
                  component={Link}
                  sx={{
                    color: "black",
                    textDecoration: "underline",
                  }}
                  href="/signup"
                >
                  ثبت نام کنید
                </Typography>
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              width: "100%",
              height: "890px",
              position: "relative",
              img: {
                objectFit: "cover",
              },
            }}
          >
            <Image src={x} alt="login-img" fill />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default LoginPage;
