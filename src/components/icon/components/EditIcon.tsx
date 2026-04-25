import type { SVGProps } from "react";
const SvgEditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 1.5H6Q1.5 1.5 1.5 6v9.75c0 .413.337.75.75.75H12q4.5 0 4.5-4.5V6q0-4.5-4.5-4.5"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.683 5.88 5.79 9.772c-.15.15-.292.443-.322.653l-.21 1.485c-.075.54.3.915.84.84l1.485-.21c.21-.03.502-.172.652-.322l3.893-3.893c.667-.668.99-1.448 0-2.438-.99-.997-1.77-.682-2.445-.007"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.127 6.435a3.52 3.52 0 0 0 2.438 2.438"
    />
  </svg>
);
export default SvgEditIcon;
