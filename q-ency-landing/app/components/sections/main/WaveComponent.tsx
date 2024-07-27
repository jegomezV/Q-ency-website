import * as React from "react"
const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-screen w-screen absolute left-full -translate-x-2/4" width={900} height={900} {...props}>
    <path fill="#E2E8F0" d="M0 0h900v900H0z" />
    <path
      fill="#7631F4"
      d="m287 900 11.2-37.5C309.3 825 331.7 750 383 675s131.7-150 173.3-225c41.7-75 44.7-150 31.5-225-13.1-75-42.5-150-57.1-187.5L516 0h384v900Z"
    />
  </svg>
)
export default SvgComponent
