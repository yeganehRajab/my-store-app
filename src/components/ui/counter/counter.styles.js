const minusButtonSx = (theme) => ({
  width: "40px",
  border: `1px solid ${theme.palette.common.black.light}`,
  borderRight: "none",
  minWidth: "45px",
  borderRadius: "4px 0 0 4px",
  ":hover": {
    bgcolor: "secondary.light",
    svg: {
      color: "common.white",
    },
  },
});

const plusButtonSx = (theme) => ({
  border: `1px solid ${theme.palette.common.black.light}`,
  borderLeft: "none",
  minWidth: "45px",
  borderRadius: "0 4px 4px 0",
  ":hover": {
    bgcolor: "secondary.light",
    svg: {
      color: "common.white",
    },
  },
});

const textFieldSx = (theme) => ({
  height: "44px",
  div: { borderRadius: "0 ", height: "100%" },
  width: "80px",
  input: { textAlign: "center" },
  border: `1px solid ${theme.palette.common.black.light}`,
});

const productCardStyles = {
  minusButtonSx,
  plusButtonSx,
  textFieldSx,
};

export default productCardStyles;
