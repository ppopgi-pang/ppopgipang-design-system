import type { SVGProps } from "react";
const SvgUserMarkerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <defs>
      <radialGradient id="UserMarkerIcon_svg__a">
        <stop offset="0%" stopColor="#7dd3fc" stopOpacity={0.6} />
        <stop offset="50%" stopColor="#38bdf8" stopOpacity={0.3} />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity={0} />
      </radialGradient>
      <filter id="UserMarkerIcon_svg__b">
        <feDropShadow dx={0} dy={2} floodOpacity={0.2} stdDeviation={2} />
      </filter>
    </defs>
    <circle cx={16} cy={16} r={14} fill="url(#UserMarkerIcon_svg__a)" />
    <circle
      cx={16}
      cy={16}
      r={7}
      fill="#fff"
      filter="url(#UserMarkerIcon_svg__b)"
    />
    <circle cx={16} cy={16} r={5} fill="#0ea5e9" />
  </svg>
);
export default SvgUserMarkerIcon;
