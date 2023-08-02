import { Box } from "@mui/material";
import Image from "next/image";

export const nodes = [
  <Box sx={{ width: "100%", height: "400px", bgcolor: "#F5F5F5" }} key={1}>
    <Image src={"/images/home/newProduct/1.png"} alt="product" fill />
  </Box>,
  <Box sx={{ width: "100%", height: "400px", bgcolor: "#F5F5F5" }} key={2}>
    <Image src={"/images/home/newProduct/2.png"} alt="product" fill />
  </Box>,
  <Box sx={{ width: "100%", height: "400px", bgcolor: "#F5F5F5" }} key={3}>
    <Image src={"/images/home/newProduct/5.png"} alt="product" fill />
  </Box>,
  <Box sx={{ width: "100%", height: "400px", bgcolor: "#F5F5F5" }} key={4}>
    <Image src={"/images/home/newProduct/7.png"} alt="product" fill />
  </Box>,
  <Box sx={{ width: "100%", height: "400px", bgcolor: "#F5F5F5" }} key={4}>
    <Image src={"/images/home/newProduct/8.png"} alt="product" fill />
  </Box>,
];
