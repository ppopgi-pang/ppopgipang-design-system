import type { SVGProps } from "react";
const SvgActiveMarkerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 43"
    {...props}
  >
    <path
      fill="#FFD93D"
      d="M32 16c0 8.837-12.444 26.074-16 26.074S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16"
    />
    <circle cx={15.999} cy={16} r={12.444} fill="#8ED6EE" />
    <path fill="#FFE066" d="M24.89 16A8.889 8.889 0 1 0 7.11 16H24.89" />
    <path fill="#fff" d="M24.89 16A8.889 8.889 0 1 1 7.11 16H24.89" />
  </svg>
);
export default SvgActiveMarkerIcon;
