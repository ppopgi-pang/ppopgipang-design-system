import type { SVGProps } from "react";
const SvgMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#5A5A5A"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3 7h18M3 12h18M3 17h18"
    />
  </svg>
);
export default SvgMenuIcon;
