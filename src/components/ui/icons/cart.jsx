import { SvgIcon } from "@mui/material";

const CartIcon = (props) => (
  <SvgIcon viewBox="0 0 40 40" {...props}>
    <svg fill="none">
      <path
        d="M13.75 33.75C14.4404 33.75 15 33.1904 15 32.5C15 31.8096 14.4404 31.25 13.75 31.25C13.0596 31.25 12.5 31.8096 12.5 32.5C12.5 33.1904 13.0596 33.75 13.75 33.75Z"
        stroke={props.color ? "currentColor" : "#000"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.25 33.75C31.9404 33.75 32.5 33.1904 32.5 32.5C32.5 31.8096 31.9404 31.25 31.25 31.25C30.5596 31.25 30 31.8096 30 32.5C30 33.1904 30.5596 33.75 31.25 33.75Z"
        stroke={props.color ? "currentColor" : "#000"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.75 6.25H8.75L12.5 27.5H32.5"
        stroke={props.color ? "currentColor" : "#000"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 20.8333H31.9875C32.132 20.8334 32.2722 20.7834 32.384 20.6918C32.4958 20.6003 32.5724 20.4727 32.6008 20.331L34.8508 9.081C34.8689 8.99029 34.8667 8.89667 34.8443 8.80691C34.8219 8.71716 34.7798 8.63349 34.7212 8.56197C34.6625 8.49044 34.5887 8.43283 34.505 8.39329C34.4214 8.35375 34.33 8.33328 34.2375 8.33334H10"
        stroke={props.color ? "currentColor" : "#000"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </SvgIcon>
);

export default CartIcon;
