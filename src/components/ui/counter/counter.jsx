import { Button, Stack, TextField, useTheme } from "@mui/material";
import { toast } from "react-toastify";

import PlusIcon from "../icons/plaus";
import MinusIcon from "../icons/minus";

import styles from "./counter.styles";

const Counter = ({ count, setCount, maxValues = 1000, minValue = 1 }) => {
  //counter onchange handler
  const handleChange = (event) => {
    if (Number(event.target.value) > maxValues) {
      toast.error(`تعداد این محصول نمی تواند بیشتر از ${maxValues} باشد`);
    } else {
      setCount(Math.max(Number(event.target.value), 1));
    }
  };

  const theme = useTheme();

  return (
    <Stack flexDirection={"row"} height={"44px"} width={"180px"}>
      <Button
        onClick={() => setCount((prev) => prev + 1)}
        sx={styles.plusButtonSx(theme)}
        disabled={count === maxValues}
      >
        <PlusIcon color={"comm.black.main"} />
      </Button>
      <TextField
        onChange={handleChange}
        value={count}
        sx={styles.textFieldSx(theme)}
      />
      <Button
        onClick={() => setCount((prev) => prev - 1)}
        disabled={count === minValue}
        sx={styles.minusButtonSx(theme)}
      >
        <MinusIcon color={"comm.black.main"} />
      </Button>
    </Stack>
  );
};

export default Counter;
