import React from "react";

import "../css/typing-css.css";

import { Play } from "lucide-react";

import {
  SiInstagram,
  SiGithub,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
const TypingHeader = () => {
  return (
    <div>
      <div className="font-PlayfairDisplay flex flex-col w-full text-3xl tracking-wider">
        <span>Hey! I&apos;m Allison,&nbsp;</span>
        <br />
        <div className="text-5xl">
          A&nbsp;<span className="typewriter text-5xl"></span>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-10 -translate-y-20 z-10">
        {" "}
        {/* Changed from absolute to relative and added self-center */}
        <Link
          href="/"
          className="bg-white shadow-lg border-2 border-backgroundColor text-black rounded-xl flex w-full p-3 gap-2 text-center font-semibold font-PlayfairDisplay hover:scale-110 transition-transform"
        >
          {" "}
          <Play className="fill-black" /> View Projects
        </Link>
      </div>

      <div>
        <ul className="flex gap-10 mt-10">
          <li className="border-2 border-white p-2 rounded-full hover:bg-white  transition-colors hover:text-backgroundColor">
            <Link className="flex flex-col " href="#">
              <SiInstagram size={24} className="mx-auto my-auto " />
            </Link>
          </li>
          <li className="border-2 border-white p-2 rounded-full hover:bg-white  transition-colors hover:text-backgroundColor">
            <Link className=" flex flex-col " href="#">
              <SiGithub size={24} className="mx-auto my-auto" />
            </Link>
          </li>
          <li className="border-2 border-white p-2 rounded-full hover:bg-white  transition-colors hover:text-backgroundColor">
            <Link className="flex flex-col " href="#">
              <SiLinkedin size={24} className="mx-auto my-auto" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TypingHeader;
