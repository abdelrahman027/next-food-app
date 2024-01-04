/** @format */

import Image from "next/image";
import React from "react";
import FilledButton from "./FilledButton";
import { FaCartPlus } from "react-icons/fa";

const MenuItem = ({ title, img, desciption, price }) => {
  return (
    <div className=" border border-gray-300 transition-all hover:shadow-md cursor-pointer justify-center p-3  rounded-3xl flex flex-col items-center gap-1 hover:shadow-black/50 ">
      <Image
        className="hover:scale-125 transition-all"
        src={"/heroImage.png"}
        alt="pizza"
        width={180}
        height={180}
      />
      <h2 className="font-semibold">Peproni Pizza</h2>
      <p className="text-gray-400">Description</p>
      <FilledButton classes={"flex gap-2  items-center text-sm md:text-base"}>
        <FaCartPlus /> $12
      </FilledButton>
    </div>
  );
};

export default MenuItem;
