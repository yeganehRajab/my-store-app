import { SvgIcon } from "@mui/material";

const MinusIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <svg fill="none">
      <path
        d="M20 12H4"
        stroke={props.color ? "currentColor" : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </SvgIcon>
);

export default MinusIcon;
