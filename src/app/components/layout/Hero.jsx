/** @format */

import Image from "next/image";
import React from "react";
import FilledButton from "../FilledButton";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className=" flex-col md:flex-row flex justify-center items-center">
      {/********** HERO TEXT *********/}
      <div className="mt-20 text-center md:mt-0 md:text-start">
        <h1 className="lg:leading-[3rem] leading-8 md:text-3xl text-2xl lg::text-4xl font-semibold">
          Everything <br></br> is better <br></br> with a{" "}
          <span className="text-primary">Pizza</span>!
        </h1>
        <p className="my-4 text-gray-500 w-3/4 mx-auto md:w-auto">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life.
        </p>
        <div className="flex gap-4 group items-center justify-center md:justify-start mt-12 text-sm">
          <FilledButton classes={"flex gap-2  items-center justify-center"}>
            Order now
            <FaRegArrowAltCircleRight className="group-hover:animate-spin" />
          </FilledButton>
          <button className="text-gray-500 font-semibold">Learn more</button>
        </div>
      </div>
      {/***************  HERO IMAGE ***************/}
      <Image
        src={"/heroImage.png "}
        className="h-80 w-80 md:h-2/3 md:w-2/3 "
        alt="pizza"
        width={500}
        height={500}
      />
    </section>
  );
}
