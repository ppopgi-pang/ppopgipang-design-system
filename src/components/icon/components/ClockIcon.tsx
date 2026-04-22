import * as React from "react";
import type { SVGProps } from "react";
const SvgClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#B0B0B0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.333 10c0 4.6-3.734 8.333-8.334 8.333A8.336 8.336 0 0 1 1.666 10c0-4.6 3.733-8.333 8.333-8.333S18.333 5.4 18.333 10"
    />
    <path
      stroke="#B0B0B0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.091 12.65-2.583-1.542c-.45-.266-.817-.908-.817-1.433V6.258"
    />
  </svg>
);
export default SvgClockIcon;
