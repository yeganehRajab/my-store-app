import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const StyledMainInput = styled(TextField)(({ theme, bgcolor = "#F8F8F8" }) => ({
  "& .MuiOutlinedInput-root": {
    overflow: "hidden",
    height: "4.8rem",
    backgroundColor: `${bgcolor} !important`,

    "&:hover": {
      "& fieldset": {
        borderColor: theme.palette.grey[200],
      },
    },

    fontSize: "1.2rem",

    "& fieldset": {
      borderColor: theme.palette.grey[100],
    },

    "& input": {
      backgroundColor: `${bgcolor} !important`,
    },

    "&.Mui-focused": {
      "& fieldset": {
        borderColor: theme.palette.primary,
      },
    },

    // On Disabled
    "&.Mui-disabled": {
      background: theme.palette.grey[50] + 90,
      cursor: "not-allowed",

      "& input": {
        cursor: "not-allowed",
      },
    },
  },
}));

export default StyledMainInput;
