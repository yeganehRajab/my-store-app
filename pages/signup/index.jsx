import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

import Layout from "../../src/components/ui/layout/index/index";

import Image from "next/image";
import Link from "next/link";
import x from "../../public/images/login/bag.png";
import { useFormik } from "formik";

const signupInitialValues = {
  mobileNumber: "",
  password: "",
  rePassword: "",
};

const SignupPage = () => {
  //
  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: signupInitialValues,
    onSubmit: handleSubmit,
  });

  return (
    <Layout>
      <Grid container mb={10}>
        <Grid item xs={6}>
          <Typography
            textAlign="center"
            sx={{
              fontSize: "30px",
              fontWeight: "600",
              mt: "100px",
              mb: "100px",
            }}
          >
            ثبت نام
          </Typography>

          <Stack
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ px: "110px" }}
            spacing="50px"
          >
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
              <TextField
                label="تکرار رمز عبور"
                variant="standard"
                sx={{
                  label: {
                    fontWeight: "500",
                    fontSize: "18px",
                  },
                }}
                {...formik.getFieldProps("rePassword")}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ bgcolor: "secondary.light" }}
              >
                ثبت نام
              </Button>
            </Stack>

            <Typography textAlign="center">
              حساب کاربری دارید؟
              <Typography
                component={Link}
                sx={{
                  color: "secondary.dark",
                  textDecoration: "underline",
                }}
                href="/login"
              >
                وارد شوید
              </Typography>
            </Typography>
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

export default SignupPage;
