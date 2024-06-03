import React from "react";
import Image from "next/image";
import SOCCImage from "../../../public/design/Artboard 1 - Copy.jpg";
import SOCCImage1 from "../../../public/design/Artboard 1 copy - Copy.jpg";
import SOCCImage2 from "../../../public/design/FOC2.jpg";
import SOCCImage3 from "../../../public/design/teampsd.jpg";
import SOCCImage4 from "../../../public/design/howtonotbefedup.jpg";
import SOCCImage5 from "../../../public/design/SDC Annoucement.png";
import { Separator } from "../ui/separator";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
} from "@icons-pack/react-simple-icons";

const GraphicSectionOne = () => {
  // Generate an array of image URLs

  return (
    <div className="container max-w-4/6 grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <Image
          src={SOCCImage5}
          alt="Graphic Design"
          className="relative transform rotate-12 translate-x-20 translate-y-20 rotate shadow-lg z-30"
          width={500}
        />
        <div className="relative flex w-1/3 gap-4 z-10">
          <Image src={SOCCImage} alt="Graphic Design" />
          <Image src={SOCCImage1} alt="Graphic Design" />
          <Image src={SOCCImage3} alt="Graphic Design" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-3 items-end w-full">
        <h1 className="font-PlayfairDisplay text-[12em]">01</h1>
        <Separator className="w-20 my-2" />
        <h2 className="text-4xl font-PlayfairDisplay font-bold">
          SOCC - Club Publicity Materials
        </h2>
        <div className="flex gap-5 mt-4 text-3xl ">
          <SiAdobeillustrator size={40} />
          <SiAdobephotoshop size={40} />
          <SiCanva size={40} />
        </div>
      </div>
    </div>
  );
};
export default GraphicSectionOne;
