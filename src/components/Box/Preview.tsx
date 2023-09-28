import React, { useState } from "react";

const Preview = () => {
  const [selectedColor, setSelectedColor] = useState("#f5f5f5");
  const [selectedColorChildren, setSelectedColorChildren] = useState("#00FFFF");

  return (
    <>
      <div className="card w-[100%] pt-[15px]">
        <div className="flex justify-between">
          <h2 className="font-semibold leading-[2.4rem] pl-[20px] pb-[20px]">
            Preview
          </h2>
          <div className="flex pr-[20px]">
            <input type="color" className="w-[50px] h-[35px]" />
            <input type="color" className="w-[50px] h-[35px]" />
          </div>
        </div>
        <div className="bg-[] p-[10px]" style={{ background: selectedColor }}>
          <div
            className="w-[300px] h-[150px] m-[50px]"
            style={{ background: selectedColorChildren }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Preview;
