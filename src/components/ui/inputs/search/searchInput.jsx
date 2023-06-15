import { InputAdornment } from "@mui/material";

import MainInput from "../main/mainInput";
import SearchIcon from "../../icons/search";

import styles from "./searchInput.styles";

const SearchInput = (props) => {
  return (
    <MainInput
      sx={styles.inputSx()}
      placeholder="جستجو"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={styles.iconSx()} />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default SearchInput;
