import type { SVGProps } from "react";
const SvgDefaultMarkerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 32"
    {...props}
  >
    <path
      fill="#FF6F91"
      d="M24 12c0 6.627-9.333 19.556-12 19.556S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12"
    />
    <circle cx={11.999} cy={12} r={9.333} fill="#8ED6EE" />
    <path fill="#FF85A2" d="M18.667 12a6.667 6.667 0 0 0-13.333 0h13.333" />
    <path fill="#fff" d="M18.667 12a6.667 6.667 0 0 1-13.333 0h13.333" />
  </svg>
);
export default SvgDefaultMarkerIcon;
