import React from "react";
import { GoPencil } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

const BoxShadow = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[20px]">
      <div className="container mx-auto px-[100px] grid grid-cols-2 gap-5">
        <div className="card">
          <h2 className="font-semibold leading-[2.4rem] pl-[20px]">
            Box-Shadow CSS Generator
          </h2>
          <>
            <div className="card_item">
              <label className="font-normal">Shift right</label>
              <input type="range" className="cursor-pointer h-[5px] w-[100%]" />
            </div>
            <div className="card_item">
              <label className="font-normal">Shift down</label>
              <input type="range" className="cursor-pointer h-[5px] w-[100%]" />
            </div>
            <div className="card_item">
              <label className="font-normal">Spread</label>
              <input type="range" className="cursor-pointer h-[5px] w-[100%]" />
            </div>
            <div className="card_item">
              <label className="font-normal">Blur</label>
              <input type="range" className="cursor-pointer h-[5px] w-[100%]" />
            </div>
            <div className="card_item">
              <label className="font-normal">Opacity</label>
              <input type="range" className="cursor-pointer h-[5px] w-[100%]" />
            </div>
            <div className="card_item">
              <input type="checkbox" className="cursor-pointer" />
              <label className="font-normal pl-[10px]">Inset</label>
            </div>
            <div className="card_item pb-4">
              <input type="color" className="w-[50px] h-[35px]" />
            </div>
          </>
          <hr />
          <div className="card_item">
            <button className="border-solid border px-4 py-2 rounded-[3px]">
              Add Layer
            </button>
          </div>
          <div className="card_item bg-[#f5f5f5] flex justify-between py-[15px] mx-[20px]">
            <div className="text-[18px] cursor-move">
              <CgMenuGridO />
            </div>
            <div className="w-[80p%] text-[15px] cursor-move">
              0px 0px 5px 5px rgba(0,0,0,0.2s)
            </div>
            <div className="flex items-center text-[18px] cursor-pointer">
              <GoPencil className="mr-[15px]" />
              <AiOutlineDelete className="mr-[15px]" />
            </div>
          </div>
        </div>
        <div>
          <div className="card w-[100%] min-h-[10vh]">
            <div className="flex justify-between">
              <h2 className="font-semibold leading-[2.4rem] pl-[20px]">
                Preview
              </h2>
              <div className="flex pr-[20px]">
                <input type="color" className="w-[50px] h-[35px]" />
                <input type="color" className="w-[50px] h-[35px]" />
              </div>
            </div>
            <div className="relative h-[200px] bg-black">
              <div className="absolute resize m-[40px] h-[150px] w-[40%] bg-yellow-500"></div>
            </div>
          </div>
          {/* <div>
            <div className="flex justify-between card">
              <h2 className="font-semibold leading-[2.4rem] pl-[20px]">
                Preview
              </h2>
              <div className="flex pr-[20px]">
                <input type="color" className="w-[50px] h-[35px]" />
                <input type="color" className="w-[50px] h-[35px]" />
              </div>
            </div>
            <div className="relative h-[300px] w-[100%] bg-black">
              <div className="absolute resize h-[200px] w-[40%] bg-yellow-500 top-[50px] left-[50px]"></div>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default BoxShadow;
