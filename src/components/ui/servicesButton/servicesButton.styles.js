const ButtonSx = () => ({
  backgroundColor: "#fff",
  transition: ".8s",
  ":hover": {
    backgroundColor: "secondary.light",
    " .buttonText": {
      color: "common.white",
    },
    svg: {
      color: "common.white",
    },
  },
});

const servicesButtonStyles = {
  ButtonSx,
};

export default servicesButtonStyles;
