import * as React from "react";
import type { SVGProps } from "react";
const SvgReloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M21 12a9 9 0 1 1-9-9c2.5 0 4.5 1.5 6 3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M21 3v4h-4"
    />
  </svg>
);
export default SvgReloadIcon;
