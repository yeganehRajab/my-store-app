import { Grid, IconButton, Stack, Typography } from "@mui/material";
import style from "./footer.styles";
import FaceBookIcon from "../../icons/faceBook";
import TwitterIcon from "../../icons/twitter";
import InstagramIcon from "../../icons/instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <Stack position={"relative"}>
      <Grid container bgcolor={"primary.dark"} sx={style.GridSx()}>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          display="flex"
          gap={1}
          marginTop={"20px"}
        >
          <Stack spacing={1.1}>
            <Typography variant="textLgMedium" color="grey.light">
              پیوندهای مفید
            </Typography>
            <Link href="#">
              <Typography variant="pLgLight" color="grey.light">
                قوانین و مقررات
              </Typography>
            </Link>

            <Link href="#">
              <Typography variant="pLgLight" color="grey.light">
                سیاست حفظ حریم خصوصی
              </Typography>
            </Link>

            <Link href="#">
              <Typography variant="pLgLight" color="grey.light">
                سوالات پرتکرار
              </Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          display="flex"
          // direction="column"
          gap={1}
          marginTop={"20px"}
        >
          <Stack spacing={1.1}>
            <Typography variant="textLgMedium" color="grey.light">
              حساب کاربری
            </Typography>
            <Link href="#">
              <Typography variant="pLgLight" color="grey.light">
                حساب من
              </Typography>
            </Link>

            <Link href="#">
              <Typography variant="pLgLight" color="grey.light">
                ورود / ثبت نام
              </Typography>
            </Link>

            <Link href="#">
              <Typography variant="pLgLight" color="grey.light">
                سبد خرید
              </Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          display="flex"
          gap={1}
          marginTop={"20px"}
        >
          <Stack spacing={1.1}>
            <Typography variant="textLgMedium" color="grey.light">
              خدمات مشتریان
            </Typography>
            <Link href="#">
              <Typography variant="pLgLight" color="grey.light">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </Typography>
            </Link>

            <Link href="#">
              <Typography variant="pLgLight" color="grey.light">
                exclusive@gmail.com
              </Typography>
            </Link>

            <Link href="#">
              <Typography variant="pLgLight" color="grey.light">
                +88015-88888-9999
              </Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3} marginTop={"20px"}>
          <Typography variant="textLgMedium" color="grey.light">
            شبکه های اجتماعی | با ما همراه باشید
          </Typography>
          <Stack direction={"row"} alignItems={"center"}>
            <IconButton>
              <FaceBookIcon />
            </IconButton>

            <IconButton>
              <TwitterIcon />
            </IconButton>

            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Footer;
