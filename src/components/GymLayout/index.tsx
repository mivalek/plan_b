import React from "react";

function GymLayout() {
  return (
    <>
      <g id="big-room">
        <g className="mat fill-[var(--mat)]">
          <path d="M167 345.5L400.5 612.5L577.5 665H1205.5L1310 598.5L1345.5 536H1461L1472.5 533L1514 499.5L1463 331L1314.5 207L1333 65.5L1033 43L977 114H888L828 37L700.5 66.5H478L438.5 86H386L351 57L184 35.5L65.5 146V299.5L103 334L167 345.5Z" />
        </g>
        <g id="slab" className="clickable fill-[var(--slab)]">
          <path d="M829 40.5V44L702.113 72.9873L702.058 73H479.622L440.729 92.9453L440.621 93H384.828L384.692 92.8945L348.3 64.4775L187.168 43.5264L71 151.718V294.787L113.739 336H19.5V19H829V40.5Z" />
        </g>
        <g id="large-block" className="clickable fill-[var(--large-block)]">
          <path d="M829 305.5L779 364.5L854.5 488L1078.5 508L1160.5 498.5L1260.5 357L1144 289L949.5 327L910.5 308L898.5 289L829 305.5Z" />
        </g>
        <g id="small-block" className="clickable fill-[var(--small-block)]">
          <path d="M610.5 298L361 234L318 311.5L435 468L506 488.5L648 430V380.5L610.5 298Z" />
        </g>
        <g id="cave" className="clickable fill-[var(--cave)]">
          <path d="M829 19V44L886.5 120H981.5L1035 50.5L1326 72L1308.5 212L1457.5 335.5L1507.5 500.5L1460 536H1552.5V19H829Z" />
        </g>
        <g className="outer-walls fill-[var(--outside-walls)]">
          <path d="M74.7736 803.987H22.757V22.5131L1548 22.5V619H1570.5V1H0.75V825H1569.75V740.949H1548.24V803.987H1496.73V814.494H1324.67V803.987H1288.16V814.494H1116.11V803.987H1079.59V814.494H907.539V803.987H871.027V814.494H699.473V803.987H663.961V814.494H490.406V803.987H454.895V814.494H282.34V803.987H246.328V814.494H74.7736V803.987Z" />
        </g>
      </g>
      <g id="small-room">
        <g className="mat fill-[var(--mat)]">
          <path d="M1966 741.5L1960.5 736V668.5L1858.5 282L1806 250L1799 245L1802 70L1852 45L2083.5 115.5L2230 80L2313.5 136.5L2308 277L2396 293.5V551.5L2275 606.5L2265.5 703.5L2271 741.5H1966Z" />
        </g>
        <g id="block" className="clickable fill-[var(--block)]">
          <path d="M2187.5 423L2110 279.5L1949.5 298.5L2069.5 554L2187.5 423Z" />
        </g>
        <g id="u-wall" className="clickable fill-[var(--u-wall)]">
          <path d="M1745 250H1806V73L1855.5 50L2082.5 119L2229 83.5L2308 139L2300.5 279.5L2391 297.5H2422.5V15.5H1745V250Z" />
        </g>
        <g id="corner" className="clickable fill-[var(--corner)]">
          <path d="M2390 297.5H2422.5V808H1960.5V733.5H2264L2260 701L2269.5 599L2390 545V297.5Z" />
        </g>
        <g className="outer-walls fill-[var(--outside-walls)]">
          <path d="M1570.5 619.125H1548V1H2440V825H1879.5V804H2416.5V22.487H1570.5V619.125Z" />
          <path d="M1744.5 825V804H1570V741H1548V825H1744.5Z" />
        </g>
      </g>
    </>
  );
}

export default GymLayout;
