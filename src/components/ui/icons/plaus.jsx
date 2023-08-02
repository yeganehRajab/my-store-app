import { SvgIcon } from "@mui/material";

const PlusIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <svg fill="none">
      <path
        d="M12 20V12M12 12V4M12 12H20M12 12H4"
        stroke={props.color ? "currentColor" : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </SvgIcon>
);

export default PlusIcon;
