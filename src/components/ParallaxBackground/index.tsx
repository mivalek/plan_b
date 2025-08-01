import Image from "next/image";
import React from "react";

function ParallaxBackground() {
  return (
    <>
      <Image
        quality={100}
        fill={true}
        id="background"
        src="/assets/background.webp"
        alt=""
      />
      <Image
        quality={100}
        fill={true}
        id="back-wall"
        src="/assets/back_wall.webp"
        alt=""
      />
      <Image
        quality={100}
        fill={true}
        className="parallax__block-back"
        src="/assets/block_background.webp"
        alt=""
      />
      <Image
        quality={100}
        fill={true}
        className="parallax__climber-back"
        src="/assets/climber_background.webp"
        alt=""
      />
      <Image
        quality={100}
        fill={true}
        className="parallax__block-front"
        src="/assets/block_foreground.webp"
        alt=""
      />
      <Image
        quality={100}
        fill={true}
        className="parallax__climber-front"
        src="/assets/climber_foreground.webp"
        alt=""
      />
      <svg
        id="foreground"
        viewBox="0 0 1920 1281"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_18_409)">
          <path
            d="M1817 952L1961.5 838V1310.5H-93.5V1274L626.5 1259L1523.5 1189.5L1779 1076.5L1817 952Z"
            fill="rgb(var(--secondary))"
            fillOpacity="0.63"
          />
          <path
            d="M1822 1009.5L1936.5 858.5V1311.5H315.5V1283L1412.5 1232L1775.5 1134L1822 1009.5Z"
            fill="var(--bg)"
          />
        </g>
        <defs>
          <clipPath id="clip0_18_409">
            <rect width="1920" height="1281" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default ParallaxBackground;
