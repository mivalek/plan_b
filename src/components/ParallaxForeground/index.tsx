import useTheme from "@/hooks/useTheme";
import Image from "next/image";
import React from "react";

function ParallaxForeground() {
  return (
    <>
      <Image
        quality={100}
        fill={true}
        className="parallax__foreground light"
        src={`/assets/foreground_light.svg`}
        alt=""
      />
      <Image
        quality={100}
        fill={true}
        className="parallax__foreground dark"
        src={`/assets/foreground_dark.svg`}
        alt=""
      />
    </>
  );
}

export default ParallaxForeground;
