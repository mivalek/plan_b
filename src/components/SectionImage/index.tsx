import React, { Dispatch, SetStateAction } from "react";
import Header from "../Header";

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
      <img src={imageUrl} alt="" />
      <Header navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
    </div>
  );
}

export default SectionImage;
