import React from "react";
import TypingHeader from "./TypingHeader";
import Image from "next/image";

const HeaderWrapper = () => {
  return (
    <div className="overflow-hidden w-9/12 max-w-[calc(1100px)] mx-auto flex h-[calc(75vh)] items-center justify-between">
      <TypingHeader />
      <Image src="/Allison.png" alt="Allison" height={600} width={600} />
    </div>
  );
};
export default HeaderWrapper;
