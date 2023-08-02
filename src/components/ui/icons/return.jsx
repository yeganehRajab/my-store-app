import { SvgIcon } from "@mui/material";

const ReturnIcon = (props) => (
  <SvgIcon viewBox="0 0 40 40" {...props}>
    <svg fill="none">
      <g clip-path="url(#clip0_2_2081)">
        <path
          d="M33.3334 18.3333C32.9258 15.4004 31.5652 12.6828 29.4611 10.5992C27.3571 8.51556 24.6263 7.18153 21.6895 6.80259C18.7527 6.42365 15.7728 7.02081 13.2088 8.50208C10.6447 9.98335 8.63883 12.2666 7.50008 15M6.66675 8.33334V15H13.3334"
          stroke={props.color ? "currentColor" : "#000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66675 21.6667C7.07435 24.5996 8.43497 27.3172 10.539 29.4008C12.6431 31.4845 15.3738 32.8185 18.3106 33.1974C21.2474 33.5764 24.2274 32.9792 26.7914 31.4979C29.3554 30.0167 31.3613 27.7334 32.5001 25M33.3334 31.6667V25H26.6667"
          stroke={props.color ? "currentColor" : "#000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_2081">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </SvgIcon>
);

export default ReturnIcon;
