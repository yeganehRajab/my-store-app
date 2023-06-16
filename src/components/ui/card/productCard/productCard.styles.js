const imageStackSx = () => ({
  width: "100%",
  height: "250px",
  backgroundColor: "grey.main",
  " .add": {
    width: "100%",
    backgroundColor: "primary.dark",
    color: "grey.light",
    textAlign: "center",
    padding: "10px 0",
    opacity: "0",
    transition: ".5s",
  },
  ":hover": {
    " .add": {
      opacity: "1",
    },
  },
});

const badgeSx = ({ badgeStatus }) => ({
  backgroundColor: badgeStatus ? "success.dark" : "error.main",
  textAlign: "center",
});

const productCardStyles = {
  imageStackSx,
  badgeSx,
};

export default productCardStyles;
