"use client";

import React, { useState } from "react";
import Image from "next/image";
import projects from "@/lib/softprojects";
import { ArrowRight } from "lucide-react";
import "./css/viewmore.css";

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

const SoftwareSection = () => {
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (imageSrc: string) => {
    setModalImage("");
    setModalImage(imageSrc);
  };

  return (
    <div className="pt-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <h2 className="text-3xl font-semibold  text-center font-PlayfairDisplay text-white sm:text-4xl">
            Software Projects
          </h2>

          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-12">
            {projects.slice(0, 3).map((project) => (
              <Dialog key={project.id}>
                <article
                  className={`relative isolate flex flex-col gap-8 lg:flex-row bg-white bg-opacity-15 ${
                    project.alignment === "reverse"
                      ? "lg:flex-row-reverse rounded-l-full text-right"
                      : "rounded-r-full"
                  }`}
                >
                  <DialogTrigger
                    onClick={() => handleImageClick(project.imageSrc)}
                  >
                    <div className="relative aspect-[16/9] md:aspect-[2/1] md:aspect-rectangle md:w-96 w-64 lg:shrink-0">
                      <Image
                        src={project.imageSrc}
                        width={160}
                        height={90}
                        alt=""
                        className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                      />
                    </div>
                  </DialogTrigger>
                  <div className="justify-center flex flex-col ">
                    <p className="">{project.date}</p>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-2 text-lg font-semibold leading-6">
                        {project.title}
                      </h3>
                      <p className="text-xs mt-2 text-gray-400">
                        {project.skills}
                      </p>
                      <p className="mt-5 text-sm leading-6">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </article>
                <DialogContent className="max-w-[50vw] h-fit p-2 z-50">
                  <Image
                    className="object-fill"
                    src={modalImage}
                    width={1920}
                    height={1080}
                    quality={95}
                    alt="Expanded Image"
                  />
                  <DialogClose asChild className="hidden" />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
        <Link href="/software-projects" className="w-full flex justify-center ">
          <button className="viewMore fromLeft flex text-lg font-PlayfairDisplay my-7  ">
            {" "}
            View more <ArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SoftwareSection;
