const iconSx = () => ({
  marginLeft: "1.3rem",
  fontSize: "1.4rem",
});

const inputSx = () => ({
  fontSize: "37px !important",
  "&div": {
    fontSize: "22px",
    backGroundColor: "red",
  },
  input: {
    fontSize: "1rem !important",
    fontWeight: 500,
  },
});

const searchInputStyles = {
  iconSx,
  inputSx,
};

export default searchInputStyles;
