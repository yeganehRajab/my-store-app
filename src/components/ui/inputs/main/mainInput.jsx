import { Stack, Typography } from "@mui/material";

import StyledMainInput from "./mainInput.styles";

const MainInput = ({ label, size, bgcolor, placeholder, ...params }) => {
  return (
    <Stack spacing={1}>
      {label && (
        <Typography className="input-label" variant="label">
          {label}
        </Typography>
      )}
      <StyledMainInput
        size={size}
        bgcolor={bgcolor}
        placeholder={placeholder}
        {...params}
      />
    </Stack>
  );
};

export default MainInput;
