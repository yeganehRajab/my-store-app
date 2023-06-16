import { SvgIcon } from "@mui/material";

const FaceBookIcon = (props) => (
  <SvgIcon viewBox="0 0 11 18" {...props}>
    <svg fill="none">
      <path
        d="M6 7H10.5L10 9H6V18H4V9H0V7H4V5.128C4 3.345 4.186 2.698 4.534 2.046C4.87501 1.40181 5.40181 0.875009 6.046 0.534C6.698 0.186 7.345 0 9.128 0C9.65 0 10.108 0.0500001 10.5 0.15V2H9.128C7.804 2 7.401 2.078 6.99 2.298C6.686 2.46 6.46 2.686 6.298 2.99C6.078 3.401 6 3.804 6 5.128V7Z"
        fill={props.color ? "currentColor" : "#fff"}
      />
    </svg>
  </SvgIcon>
);

export default FaceBookIcon;
