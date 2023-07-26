import React from "react";

export default function Experience() {
  return (
    <div className="border-[1px] h-40 rounded-md p-4">
      <div className="h-full w-full gap-4 flex">
        <div className="bg-[#bfbfbf] w-[0.13rem]" />
        <div className="flex h-full flex-col">
          <h1 className="text-md font-extrabold">Notable Experiences</h1>
          <div className="flex flex-col  masked-overflow-small no-scrollbar overflow-y-scroll ">
            <p className="text-sm">Mongo DB</p>
            <p className="text-sm">Mongo DB</p>
            <p className="text-sm">Mongo DB</p>
            <p className="text-sm">Mongo DB</p>
            <p className="text-sm">Mongo DB</p>
            <p className="text-sm">Mongo DB</p>
            <p className="text-sm">Mongo DB</p>
            <p className="text-sm">Mongo DB</p>
            <p className="text-sm">Mongo DB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
