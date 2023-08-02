const mainContainer = () => ({
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  backgroundColor: "grey.dark",
});

const innerContainer = () => ({
  width: "58px",
  height: "58px",
  borderRadius: "50%",
  backgroundColor: "secondary.dark",
  svg: {
    fontSize: "40px",
  },
});

const featureBox = {
  mainContainer,
  innerContainer,
};

export default featureBox;
