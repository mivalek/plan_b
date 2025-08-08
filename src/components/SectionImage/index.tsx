import React, { Dispatch, SetStateAction } from "react";
import Header from "../Header";
import Image from "next/image";

function SectionImage({
  imageUrl,
  navMenuOpen,
  setNavMenuOpen,
}: {
  imageUrl: string;
  navMenuOpen: boolean;
  setNavMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="image-container">
      <div
        className="section-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="next-image h-screen relative">
        <Image quality={100} fill={true} src={imageUrl} alt="" />
      </div>
      <Header
        primary={false}
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
      />
    </div>
  );
}

export default SectionImage;
