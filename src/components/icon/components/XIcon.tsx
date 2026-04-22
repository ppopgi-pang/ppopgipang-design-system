import * as React from "react";
import type { SVGProps } from "react";
const SvgXIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#B0B0B0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.758 7.757 8.485 8.486M7.757 16.243l8.485-8.486"
    />
  </svg>
);
export default SvgXIcon;
